"use client";

import React, { useRef, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { apiClient } from "@/lib/api-client";
import { User } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Camera, Upload, Trash2, CheckCircle2, AlertCircle, Loader2, Crop } from "lucide-react";
import { ImageCropModal } from "@/components/ImageCropModal";

interface AvatarUploadProps {
  currentAvatarUrl?: string | null;
  userName?: string | null;
  onAvatarUpdated?: (newUrl: string | null) => void;
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({
  currentAvatarUrl,
  userName,
  onAvatarUpdated,
}) => {
  const { user, setUser } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const displayAvatar = currentAvatarUrl || user?.avatar_url;
  const displayName = userName || user?.full_name || "User";

  const handleFileSelected = (file: File) => {
    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setFeedback({
        type: "error",
        message: "Please choose a valid image file (JPG, PNG, WebP, or GIF).",
      });
      return;
    }

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFeedback({
        type: "error",
        message: "Image size exceeds the 5MB limit. Please choose a smaller photo.",
      });
      return;
    }

    // Read image for cropping
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImageSrc(reader.result as string);
      setCropModalOpen(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = async (croppedBlob: Blob) => {
    setIsUploading(true);
    setFeedback(null);

    // Explicitly create File with image/jpeg mime type
    const file = new File([croppedBlob], "avatar.jpg", { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("file", file);

    try {
      const updatedUser = await apiClient<User>("/auth/avatar", {
        method: "POST",
        body: formData,
      });

      setUser(updatedUser);
      if (onAvatarUpdated) {
        onAvatarUpdated(updatedUser.avatar_url ?? null);
      }

      setFeedback({
        type: "success",
        message: "Photo cropped and updated successfully!",
      });
      setTimeout(() => setFeedback(null), 4000);
    } catch (err: any) {
      setFeedback({
        type: "error",
        message: err.detail || "Unable to upload cropped image. Please try again.",
      });
      throw err;
    } finally {
      setIsUploading(false);
      setSelectedImageSrc(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelected(file);
    }
  };

  const handleRemove = async () => {
    setIsRemoving(true);
    setFeedback(null);

    try {
      const updatedUser = await apiClient<User>("/auth/avatar", {
        method: "DELETE",
      });

      setUser(updatedUser);
      if (onAvatarUpdated) {
        onAvatarUpdated(null);
      }

      setFeedback({
        type: "success",
        message: "Profile photo removed.",
      });
      setTimeout(() => setFeedback(null), 4000);
    } catch (err: any) {
      setFeedback({
        type: "error",
        message: err.detail || "Failed to remove photo.",
      });
    } finally {
      setIsRemoving(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelected(file);
    }
  };

  return (
    <div className="space-y-3">
      {/* Upload & Preview Card */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-lg border transition-all ${
          dragOver
            ? "border-slate-400 bg-slate-50"
            : "border-slate-200 bg-white shadow-soft"
        }`}
      >
        {/* Avatar Circle */}
        <div className="relative group flex-shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-slate-200 shadow-xs bg-slate-100 flex items-center justify-center">
            {displayAvatar ? (
              <img
                src={displayAvatar}
                alt={displayName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <div className="w-full h-full bg-slate-100 text-slate-700 flex items-center justify-center font-display font-bold text-2xl">
                {displayName.charAt(0).toUpperCase()}
              </div>
            )}

            {isUploading && (
              <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center rounded-full text-white">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
            )}
          </div>

          {/* Quick Camera Trigger */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            aria-label="Upload photo"
            className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-slate-900 text-white shadow-sm hover:bg-black transition-colors disabled:opacity-50"
            title="Upload new photo"
          >
            <Camera className="w-3 h-3" />
          </button>
        </div>

        {/* Action Controls & Instructions */}
        <div className="flex-1 text-center sm:text-left space-y-2.5">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 tracking-tight">
              Profile Photo
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              JPG, PNG, or WebP up to 5MB. Click &quot;Crop &amp; Zoom&quot; to adjust framing anytime.
            </p>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
              className="hidden"
            />

            <button
              type="button"
              disabled={isUploading || isRemoving}
              onClick={() => fileInputRef.current?.click()}
              className="px-3.5 py-1.5 rounded-md bg-slate-900 hover:bg-black text-white font-medium text-xs flex items-center gap-1.5 transition-colors shadow-xs disabled:opacity-50"
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <Upload className="w-3.5 h-3.5" />
                  <span>{displayAvatar ? "Change Photo" : "Upload Photo"}</span>
                </>
              )}
            </button>

            {displayAvatar && (
              <button
                type="button"
                disabled={isUploading || isRemoving}
                onClick={handleRemove}
                className="px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-500 hover:text-red-600 hover:bg-red-50/60 transition-colors flex items-center gap-1.5 disabled:opacity-50 border border-transparent hover:border-red-100"
              >
                {isRemoving ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Removing...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image Crop & Zoom Modal */}
      {cropModalOpen && selectedImageSrc && (
        <ImageCropModal
          isOpen={cropModalOpen}
          imageSrc={selectedImageSrc}
          onClose={() => {
            setCropModalOpen(false);
            setSelectedImageSrc(null);
          }}
          onApplyCrop={handleCropComplete}
        />
      )}

      {/* Feedback banner */}
      {feedback && (
        <div
          className={`p-3 rounded-card text-xs flex items-center gap-2 transition-all ${
            feedback.type === "success"
              ? "bg-blue-50 text-blue-800 border border-blue-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-blue-600" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
          )}
          <span className="font-semibold">{feedback.message}</span>
        </div>
      )}
    </div>
  );
};
