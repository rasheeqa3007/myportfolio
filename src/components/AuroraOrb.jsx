import React, { useEffect, useRef } from "react";

/**
 * AuroraOrb
 * Interactive 3D projected particle plexus & glowing quantum nexus orb.
 * Responds gracefully to mouse movement with subtle physics-based easing.
 */
export default function AuroraOrb() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const size = Math.min(window.innerWidth < 640 ? 320 : 440, 480);
    canvas.width = size * 2;
    canvas.height = size * 2;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = size * 0.72;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mouse tilt
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouse.targetX = Math.max(-1, Math.min(1, x));
      mouse.targetY = Math.max(-1, Math.min(1, y));
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate points on a 3D sphere using Fibonacci distribution
    const numPoints = 80;
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      points.push({
        x: Math.cos(theta) * r,
        y: y,
        z: Math.sin(theta) * r,
        baseX: Math.cos(theta) * r,
        baseY: y,
        baseZ: Math.sin(theta) * r,
      });
    }

    let angleX = 0;
    let angleY = 0;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse rotation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        angleY += 0.007;
        angleX = mouse.y * 0.35;
      }

      const totalAngleY = angleY + mouse.x * 0.5;

      const cosY = Math.cos(totalAngleY);
      const sinY = Math.sin(totalAngleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Project 3D points
      const projected = points.map((p) => {
        // Rotate Y
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate X
        let y1 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        // Perspective
        const scale = 380 / (380 + z2 * radius * 0.5);
        const x2d = cx + x1 * radius * scale;
        const y2d = cy + y1 * radius * scale;
        const alpha = Math.max(0.12, (z2 + 1) / 2);

        return { x: x2d, y: y2d, z: z2, scale, alpha };
      });

      // Ambient Glowing Core
      const pulse = Math.sin(step * 0.03) * 15;
      const coreGrad = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        radius * 0.55 + pulse
      );
      coreGrad.addColorStop(0, "rgba(56, 189, 248, 0.45)");
      coreGrad.addColorStop(0.4, "rgba(129, 140, 248, 0.25)");
      coreGrad.addColorStop(0.75, "rgba(168, 85, 247, 0.12)");
      coreGrad.addColorStop(1, "rgba(5, 8, 20, 0)");

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.6 + pulse, 0, Math.PI * 2);
      ctx.fill();

      // Outer delicate orbital rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(step * 0.004);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.22)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 0.95, radius * 0.38, Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();

      ctx.rotate(-step * 0.007);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.2)";
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 0.88, radius * 0.42, -Math.PI / 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Connect neighboring points (Plexus network)
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < size * 0.28) {
            const lineAlpha = (1 - dist / (size * 0.28)) * projected[i].alpha * 0.45;
            ctx.strokeStyle = `rgba(129, 140, 248, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points with starlight glow
      projected.forEach((p) => {
        const dotRadius = Math.max(1.2, p.scale * 3);
        ctx.beginPath();
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle =
          p.z > 0
            ? `rgba(56, 189, 248, ${p.alpha * 0.95})`
            : `rgba(168, 85, 247, ${p.alpha * 0.6})`;
        ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
        ctx.shadowBlur = p.z > 0 ? 8 : 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      step++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        aria-label="Interactive 3D Geometric AI Orb"
        style={{
          display: "block",
          filter: "drop-shadow(0 0 25px rgba(56, 189, 248, 0.25))",
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
