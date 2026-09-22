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
  "rgba(99, 102, 241, ", // Indigo
  "rgba(168, 85, 247, ", // Purple
  "rgba(236, 72, 153, ", // Pink
  "rgba(16, 185, 129, ", // Emerald
  "rgba(245, 158, 11, ", // Amber
  "rgba(59, 130, 246, ", // Blue
];

export const HeroParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for subtle hover repulsion
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

    // Generate particles / sprinkles
    const count = Math.min(65, Math.floor((width * height) / 14000));
    const particles: Particle[] = [];

    const types: ("circle" | "sprinkle" | "star")[] = ["circle", "sprinkle", "star", "circle"];

    for (let i = 0; i < count; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.5 + 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.15, // drifting slowly upward
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        alphaSpeed: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid dots
      const gridSpacing = 32;
      ctx.fillStyle = "rgba(43, 58, 103, 0.09)"; // Crisp visible dot grid
      for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw and update particles
      for (const p of particles) {
        // Move
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Twinkle
        p.alpha += p.alphaSpeed;
        if (p.alpha > p.baseAlpha + 0.25 || p.alpha < 0.12) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Mouse avoidance nudge
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const force = (110 - dist) / 110;
          p.x += (dx / dist) * force * 2.5;
          p.y += (dy / dist) * force * 2.5;
        }

        // Wrap around boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Draw particle based on type
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `${p.color}${p.alpha})`;

        if (p.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Soft glow halo
          ctx.fillStyle = `${p.color}${p.alpha * 0.35})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "sprinkle") {
          // Pill sprinkle shape
          const w = p.size * 3;
          const h = p.size * 0.9;
          ctx.beginPath();
          ctx.roundRect(-w / 2, -h / 2, w, h, 3);
          ctx.fill();
        } else if (p.type === "star") {
          // 4-point sparkle star
          const s = p.size * 1.8;
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
      className="absolute inset-0 w-full h-[700px] pointer-events-auto -z-10 select-none"
      style={{ opacity: 0.85 }}
    />
  );
};
