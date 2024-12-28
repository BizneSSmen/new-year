import React, { useEffect, useRef } from "react";
import "./Snowfall.css";

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Проверяем, что canvas существует

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Проверяем, что контекст 2D доступен

    const snowflakes: Snowflake[] = [];
    const maxSnowflakes = 100;

    class Snowflake {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width!;
        this.y = Math.random() * canvas!.height!;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random();
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas!.height!) {
          this.y = -this.radius;
          this.x = Math.random() * canvas!.width!;
        }
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx!.fill();
        ctx!.closePath();
      }
    }

    function createSnowflakes() {
      for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push(new Snowflake());
      }
    }

    function animate() {
      if (!ctx || !canvas) return; // Ещё раз проверяем на всякий случай

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
      });

      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Инициализация
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createSnowflakes();
    animate();

    window.addEventListener("resize", handleResize);

    // Убираем обработчики при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="snowfall-canvas"></canvas>;
};

export default Snowfall;
