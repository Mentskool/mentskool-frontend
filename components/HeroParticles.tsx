"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  alphaSpeed: number;
  type: "circle" | "sprinkle" | "star";
  rotation: number;
  rotationSpeed: number;
}

const COLORS = [
  "rgba(99, 102, 241, ", // Soft Indigo
  "rgba(14, 165, 233, ", // Soft Sky Blue
  "rgba(168, 85, 247, ", // Soft Violet
  "rgba(2, 132, 199, ", // Soft Deep Sky
  "rgba(245, 158, 11, ", // Soft Amber
];

export const HeroParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth || 1200);
    let height = (canvas.height = canvas.offsetHeight || 650);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth || 1200;
      height = canvas.height = canvas.offsetHeight || 650;
    };

    window.addEventListener("resize", handleResize);

    // Subtle mouse tracking for gentle ripple interaction
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Generate non-distracting ambient micro-particles
    const particleCount = 38;
    const particles: Particle[] = [];
    const types: ("circle" | "sprinkle" | "star")[] = ["circle", "sprinkle", "star", "circle"];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.3 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.1, // slow gentle drift upward
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        alphaSpeed: (Math.random() * 0.012 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
      });
    }

    let time = 0;

    // Render loop: 60 FPS smooth, non-distracting ambient motion
    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle, architectural background dot grid (barely-there, clean)
      const gridSpacing = 36;
      for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
          // Subtle radial fade away from center to keep focus on text
          const dx = x - width / 2;
          const dy = y - height * 0.35;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.max(width, height) * 0.7;
          const factor = Math.max(0, 1 - dist / maxDist);
          const alpha = (0.05 + factor * 0.07).toFixed(3);

          ctx.fillStyle = `rgba(71, 85, 105, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Gently undulating animated liquid ribbons (silky, low-contrast, continuous motion)
      // Wave 1: Soft Cyan & Electric Blue Ribbon
      const drawRibbon = (
        yBase: number,
        amplitude: number,
        wavelength: number,
        speed: number,
        thickness: number,
        gradStart: string,
        gradEnd: string
      ) => {
        const grad = ctx.createLinearGradient(0, yBase - amplitude, width, yBase + amplitude);
        grad.addColorStop(0, gradStart);
        grad.addColorStop(1, gradEnd);

        ctx.save();
        ctx.beginPath();
        const step = 18;
        for (let x = 0; x <= width + step; x += step) {
          const y =
            yBase +
            Math.sin(x * wavelength + time * speed) * amplitude +
            Math.sin(x * (wavelength * 0.5) + time * (speed * 0.7)) * (amplitude * 0.4);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.lineWidth = thickness;
        ctx.strokeStyle = grad;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
        ctx.restore();
      };

      // Draw 3 soft, organic moving ribbons in the upper-mid hero background
      // Soft Cyan/Blue wave
      drawRibbon(
        height * 0.38,
        28,
        0.0028,
        0.55,
        18,
        "rgba(14, 165, 233, 0.12)",
        "rgba(59, 130, 246, 0.08)"
      );

      // Soft Indigo/Purple wave
      drawRibbon(
        height * 0.46,
        34,
        0.0022,
        -0.42,
        22,
        "rgba(99, 102, 241, 0.10)",
        "rgba(168, 85, 247, 0.08)"
      );

      // Soft Sky/Blue accent wave
      drawRibbon(
        height * 0.32,
        22,
        0.0034,
        0.68,
        14,
        "rgba(37, 99, 235, 0.08)",
        "rgba(2, 132, 199, 0.06)"
      );

      // 3. Ambient Micro-particles (slow, calm floating embers & sparkles)
      for (const p of particles) {
        // Move
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Twinkle
        p.alpha += p.alphaSpeed;
        if (p.alpha > p.baseAlpha + 0.18 || p.alpha < 0.08) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Soft mouse avoidance
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          const force = (90 - dist) / 90;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        // Wrap boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Render particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `${p.color}${Math.max(0, p.alpha).toFixed(2)})`;

        if (p.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "sprinkle") {
          const w = p.size * 2.8;
          const h = p.size * 0.9;
          ctx.beginPath();
          ctx.roundRect(-w / 2, -h / 2, w, h, 2);
          ctx.fill();
        } else if (p.type === "star") {
          const s = p.size * 1.4;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-[650px] pointer-events-auto -z-10 select-none"
      style={{ opacity: 0.9 }}
    />
  );
};
