import React, { useEffect, useRef } from "react";

/**
 * AuroraBackground
 * High-performance, canvas-driven Aurora Borealis simulation with ambient particles,
 * multi-band color waves, and subtle cursor responsiveness.
 */
export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for gentle ambient attraction
    const mouse = {
      x: width * 0.5,
      y: height * 0.3,
      targetX: width * 0.5,
      targetY: height * 0.3,
    };

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Handle Mouse Move
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Floating Particles
    const particleCount = Math.min(width < 768 ? 25 : 55, 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.6,
      baseAlpha: Math.random() * 0.5 + 0.2,
      alpha: 0.3,
      speedY: Math.random() * 0.35 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color:
        Math.random() > 0.5
          ? "rgba(56, 189, 248, " // cyan
          : Math.random() > 0.5
          ? "rgba(168, 85, 247, " // purple
          : "rgba(129, 140, 248, ", // violet
    }));

    let step = 0;

    // Render loop
    const render = () => {
      // Ease mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep space base fill
      const baseGradient = ctx.createLinearGradient(0, 0, 0, height);
      baseGradient.addColorStop(0, "#050814");
      baseGradient.addColorStop(0.5, "#070c20");
      baseGradient.addColorStop(1, "#030611");
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      // Atmospheric Cursor Glow
      const cursorGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.min(width, height) * 0.45
      );
      cursorGlow.addColorStop(0, "rgba(56, 189, 248, 0.08)");
      cursorGlow.addColorStop(0.5, "rgba(129, 140, 248, 0.04)");
      cursorGlow.addColorStop(1, "rgba(5, 8, 20, 0)");
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      // Aurora Waves
      const time = prefersReducedMotion ? 1 : step * 0.005;
      const waveConfigs = [
        {
          color1: "rgba(56, 189, 248, 0.12)", // cyan
          color2: "rgba(129, 140, 248, 0.02)",
          yOffset: 0.18,
          amplitude: 70,
          freq: 0.0018,
          speed: 0.8,
        },
        {
          color1: "rgba(168, 85, 247, 0.14)", // purple
          color2: "rgba(232, 121, 249, 0.02)",
          yOffset: 0.28,
          amplitude: 90,
          freq: 0.0014,
          speed: -0.6,
        },
        {
          color1: "rgba(59, 130, 246, 0.12)", // electric blue
          color2: "rgba(16, 185, 129, 0.02)",
          yOffset: 0.4,
          amplitude: 60,
          freq: 0.0022,
          speed: 1.1,
        },
      ];

      waveConfigs.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        const baseY = height * wave.yOffset;
        for (let x = 0; x <= width; x += 15) {
          const y =
            baseY +
            Math.sin(x * wave.freq + time * wave.speed) * wave.amplitude +
            Math.sin(x * 0.0007 - time * 0.5) * (wave.amplitude * 0.4);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const waveGrad = ctx.createLinearGradient(
          0,
          baseY - wave.amplitude,
          0,
          baseY + wave.amplitude * 2.5
        );
        waveGrad.addColorStop(0, wave.color1);
        waveGrad.addColorStop(1, wave.color2);

        ctx.fillStyle = waveGrad;
        ctx.fill();
      });

      // Render Floating Particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.y -= p.speedY;
          p.x += p.speedX;
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
        }

        const alpha =
          p.baseAlpha + Math.sin(step * p.pulseSpeed) * (p.baseAlpha * 0.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.05, alpha)})`;
        ctx.shadowColor = p.color + "0.8)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      step++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
