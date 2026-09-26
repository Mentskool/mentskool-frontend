"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize2,
  X,
  Check,
  Loader2,
  Move,
  AlertCircle,
} from "lucide-react";

interface ImageCropModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onApplyCrop: (croppedBlob: Blob) => Promise<void>;
}

const VIEWPORT_SIZE = 320;
const CROP_SIZE = 240;
const OUTPUT_SIZE = 512;

export const ImageCropModal: React.FC<ImageCropModalProps> = ({
  isOpen,
  imageSrc,
  onClose,
  onApplyCrop,
}) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [isApplying, setIsApplying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [safeImageSrc, setSafeImageSrc] = useState<string>(imageSrc);

  const imgRef = useRef<HTMLImageElement>(null);

  // If imageSrc is an external HTTP URL, fetch it as a local object URL to prevent canvas cross-origin taint
  useEffect(() => {
    if (!imageSrc) return;
    setErrorMessage(null);

    let objectUrl: string | null = null;
    let isCancelled = false;

    if (imageSrc.startsWith("http://") || imageSrc.startsWith("https://")) {
      fetch(imageSrc, { mode: "cors" })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load image");
          return res.blob();
        })
        .then((blob) => {
          if (!isCancelled) {
            objectUrl = URL.createObjectURL(blob);
            setSafeImageSrc(objectUrl);
          }
        })
        .catch(() => {
          // Fallback to direct src if fetch fails
          if (!isCancelled) setSafeImageSrc(imageSrc);
        });
    } else {
      setSafeImageSrc(imageSrc);
    }

    return () => {
      isCancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [imageSrc]);

  // Load natural dimensions when safeImageSrc changes
  useEffect(() => {
    if (!safeImageSrc) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = safeImageSrc;
    img.onload = () => {
      setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
      setZoom(1);
      setRotation(0);
      setOffset({ x: 0, y: 0 });
    };
    img.onerror = () => {
      setErrorMessage("Unable to load image file. Please try selecting the photo again.");
    };
  }, [safeImageSrc]);

  if (!isOpen) return null;

  // Base scale so that image always covers the crop circle at zoom = 1
  const baseScale =
    naturalSize.width > 0 && naturalSize.height > 0
      ? Math.max(CROP_SIZE / naturalSize.width, CROP_SIZE / naturalSize.height)
      : 1;

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setOffset({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.08 : -0.08;
    setZoom((prev) => Math.min(Math.max(1, prev + delta), 3));
  };

  // Rotate 90 degrees clockwise
  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // Reset to original fit
  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setOffset({ x: 0, y: 0 });
  };

  // Canvas crop & export
  const handleSave = async () => {
    if (!imgRef.current) return;
    setIsApplying(true);
    setErrorMessage(null);

    try {
      const canvas = document.createElement("canvas");
      canvas.width = OUTPUT_SIZE;
      canvas.height = OUTPUT_SIZE;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("Canvas context is not available");
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // White background for safety
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, OUTPUT_SIZE, OUTPUT_SIZE);

      // Scale ratio from screen crop circle to output canvas
      const M = OUTPUT_SIZE / CROP_SIZE;

      // 1. Move origin to canvas center
      ctx.translate(OUTPUT_SIZE / 2, OUTPUT_SIZE / 2);

      // 2. Apply user drag offset scaled to output canvas
      ctx.translate(offset.x * M, offset.y * M);

      // 3. Rotate by user's rotation angle
      ctx.rotate((rotation * Math.PI) / 180);

      // 4. Draw image centered
      const drawnWidth = naturalSize.width * baseScale * zoom * M;
      const drawnHeight = naturalSize.height * baseScale * zoom * M;

      ctx.drawImage(
        imgRef.current,
        -drawnWidth / 2,
        -drawnHeight / 2,
        drawnWidth,
        drawnHeight
      );

      // Convert canvas to JPEG blob with robust fallback
      const blob = await new Promise<Blob>((resolve, reject) => {
        try {
          canvas.toBlob(
            (result) => {
              if (result) {
                resolve(result);
              } else {
                // Fallback to toDataURL if toBlob returns null
                try {
                  const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
                  const parts = dataUrl.split(",");
                  const byteString = atob(parts[1]);
                  const arrayBuffer = new ArrayBuffer(byteString.length);
                  const uint8Array = new Uint8Array(arrayBuffer);
                  for (let i = 0; i < byteString.length; i++) {
                    uint8Array[i] = byteString.charCodeAt(i);
                  }
                  resolve(new Blob([uint8Array], { type: "image/jpeg" }));
                } catch (dataUrlErr) {
                  reject(new Error("Unable to export cropped image from canvas"));
                }
              }
            },
            "image/jpeg",
            0.92
          );
        } catch (err) {
          // Direct fallback if toBlob throws
          try {
            const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
            const parts = dataUrl.split(",");
            const byteString = atob(parts[1]);
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
              uint8Array[i] = byteString.charCodeAt(i);
            }
            resolve(new Blob([uint8Array], { type: "image/jpeg" }));
          } catch (dataUrlErr) {
            reject(err);
          }
        }
      });

      await onApplyCrop(blob);
      setIsApplying(false);
      onClose();
    } catch (err: any) {
      console.error("Failed to crop image:", err);
      setErrorMessage(
        err?.detail || err?.message || "Failed to process and save the image. Please try again."
      );
      setIsApplying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      {/* Professional SaaS modal container - clean 10px radius, hairline border */}
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Clean Enterprise Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <h3 className="font-semibold text-sm text-slate-900 tracking-tight">
              Edit Profile Photo
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Drag to reposition, use slider to zoom & scale
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={isApplying}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Error notification if any */}
        {errorMessage && (
          <div className="px-5 py-2.5 bg-red-50 border-b border-red-100 text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
            <span className="font-medium">{errorMessage}</span>
          </div>
        )}

        {/* Studio Viewport Area */}
        <div className="p-5 flex flex-col items-center justify-center bg-slate-950">
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
            style={{ width: `${VIEWPORT_SIZE}px`, height: `${VIEWPORT_SIZE}px` }}
            className="relative overflow-hidden bg-slate-900 select-none cursor-grab active:cursor-grabbing rounded-lg border border-slate-800 touch-none shadow-inner"
          >
            {/* The Scalable, Draggable, Rotatable Image */}
            <img
              ref={imgRef}
              src={safeImageSrc}
              alt="Crop preview"
              crossOrigin="anonymous"
              draggable={false}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: `${naturalSize.width * baseScale * zoom}px`,
                height: `${naturalSize.height * baseScale * zoom}px`,
                transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg)`,
                transformOrigin: "center center",
                maxWidth: "none",
                maxHeight: "none",
              }}
            />

            {/* Circular Crop Reticle Overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                style={{
                  width: `${CROP_SIZE}px`,
                  height: `${CROP_SIZE}px`,
                  boxShadow: "0 0 0 9999px rgba(11, 15, 25, 0.72)",
                }}
                className="rounded-full border border-white/80 shadow-md"
              />
            </div>

            {/* Reposition Hint Pill */}
            <div className="pointer-events-none absolute bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-[10px] text-slate-300 font-medium flex items-center gap-1.5 border border-slate-700/60">
              <Move className="w-3 h-3 text-sky-400" />
              <span>Drag photo to align</span>
            </div>
          </div>
        </div>

        {/* Clean Controls Section */}
        <div className="px-5 py-3.5 space-y-3 bg-white border-t border-slate-100">
          {/* Zoom Slider */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Zoom</span>
              <span className="font-mono text-[11px] font-semibold text-slate-700">
                {Math.round(zoom * 100)}%
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setZoom((prev) => Math.max(1, prev - 0.1))}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <input
                type="range"
                min="1"
                max="3"
                step="0.02"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-full h-1 bg-slate-200 rounded appearance-none cursor-pointer accent-slate-900 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Action Tools */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleRotate}
                className="px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors font-medium text-[11px]"
              >
                <RotateCw className="w-3 h-3 text-slate-500" />
                <span>Rotate 90°</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors font-medium text-[11px]"
              >
                <Maximize2 className="w-3 h-3 text-slate-500" />
                <span>Reset</span>
              </button>
            </div>

            <span className="text-[10px] text-slate-400 hidden sm:inline">
              Scroll wheel zooms
            </span>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/60 flex items-center justify-end gap-2">
          <button
            type="button"
            disabled={isApplying}
            onClick={onClose}
            className="px-3 py-1.5 rounded-md border border-slate-200 text-xs font-medium text-slate-700 hover:bg-white transition-colors"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={isApplying}
            onClick={handleSave}
            className="px-4 py-1.5 rounded-md bg-slate-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50 shadow-sm"
          >
            {isApplying ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Apply & Save</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
