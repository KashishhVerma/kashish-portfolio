"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(max-width: 860px)").matches) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const points: Point[] = [];
    const MAX_POINTS = 18;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    let raf: number;
    const render = () => {
      points.unshift({ x: mouseX, y: mouseY });
      if (points.length > MAX_POINTS) points.pop();

      ctx.clearRect(0, 0, width, height);

      if (points.length > 2) {
        // build one smooth tapered tail using quadratic curves through midpoints
        for (let i = 0; i < points.length - 2; i++) {
          const p0 = points[i];
          const p1 = points[i + 1];
          const midX = (p0.x + p1.x) / 2;
          const midY = (p0.y + p1.y) / 2;
          const t = i / points.length;
          const width_ = 8 * (1 - t) + 1;
          const alpha = 1 - t;

          ctx.beginPath();
          ctx.moveTo(midX, midY);
          ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + points[i + 2].x) / 2, (p1.y + points[i + 2].y) / 2);
          const grad = ctx.createLinearGradient(p0.x, p0.y, p1.x, p1.y);
          grad.addColorStop(0, `rgba(255,79,156,${alpha})`);
          grad.addColorStop(0.5, `rgba(212,110,194,${alpha})`);
          grad.addColorStop(1, `rgba(255,143,192,${alpha})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = width_;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      // glowing head
      if (points.length) {
        const head = points[0];
        const grad = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 9);
        grad.addColorStop(0, "rgba(255,255,255,0.95)");
        grad.addColorStop(1, "rgba(255,79,156,0)");
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(head.x, head.y, 9, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
    />
  );
}
