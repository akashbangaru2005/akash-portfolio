import React, { useEffect, useRef } from "react";

const BinaryPortrait = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = "/assets/profile.jpg";

    let animationFrame;
    let particles = [];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const createParticles = () => {
      particles = [];

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      const particleCount = Math.floor((width * height) / 900);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          char: Math.random() > 0.5 ? "0" : "1",
          size: Math.random() * 6 + 5,
          speed: Math.random() * 0.6 + 0.2,
          opacity: Math.random() * 0.6 + 0.15,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      /*
       * Draw the actual photo
       */
      if (image.complete && image.naturalWidth > 0) {
        const imageRatio = image.width / image.height;
        const canvasRatio = width / height;

        let drawWidth;
        let drawHeight;
        let offsetX;
        let offsetY;

        if (imageRatio > canvasRatio) {
          drawHeight = height;
          drawWidth = height * imageRatio;
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = width;
          drawHeight = width / imageRatio;
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        }

        ctx.save();

        /*
         * Rounded clipping
         */
        const radius = 28;

        ctx.beginPath();
        ctx.roundRect(
          20,
          20,
          width - 40,
          height - 40,
          radius
        );
        ctx.clip();

        /*
         * Dark futuristic overlay
         */
        ctx.globalAlpha = 0.82;

        ctx.drawImage(
          image,
          offsetX,
          offsetY,
          drawWidth,
          drawHeight
        );

        /*
         * Blue/black overlay
         */
        ctx.globalAlpha = 0.25;
        ctx.fillStyle = "#020617";
        ctx.fillRect(0, 0, width, height);

        ctx.restore();
      }

      /*
       * Binary particles
       */
      particles.forEach((particle) => {
        particle.y += particle.speed;

        if (particle.y > height + 20) {
          particle.y = -20;
          particle.x = Math.random() * width;
        }

        const pulse =
          Math.sin(Date.now() * 0.002 + particle.phase) * 0.25 + 0.75;

        ctx.font = `${particle.size}px monospace`;

        ctx.fillStyle = `rgba(0, 229, 255, ${
          particle.opacity * pulse
        })`;

        ctx.fillText(
          particle.char,
          particle.x,
          particle.y
        );
      });

      /*
       * Digital scan lines
       */
      ctx.save();

      for (let y = 30; y < height; y += 8) {
        ctx.fillStyle = "rgba(0, 229, 255, 0.025)";
        ctx.fillRect(0, y, width, 1);
      }

      ctx.restore();

      /*
       * Border
       */
      ctx.save();

      ctx.strokeStyle = "rgba(0, 229, 255, 0.5)";
      ctx.lineWidth = 1.5;

      ctx.beginPath();

      ctx.roundRect(
        20,
        20,
        width - 40,
        height - 40,
        28
      );

      ctx.stroke();

      ctx.restore();

      animationFrame = requestAnimationFrame(draw);
    };

    image.onload = () => {
      resizeCanvas();
      draw();
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="binary-portrait">
      <canvas ref={canvasRef} />
      
      <div className="portrait-glow" />
      
      <div className="portrait-label">
        <span className="status-dot" />
        DIGITAL IDENTITY
      </div>
    </div>
  );
};

export default BinaryPortrait;