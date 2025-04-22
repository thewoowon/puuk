'use client'; // Next.js 13 이상에서 클라이언트 컴포넌트 지정

import { useRef, useEffect } from 'react';

export default function BloodCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // 피방울 객체 타입
  interface Drop {
    x: number;
    y: number;
    r: number;
    speed: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 캔버스 사이즈 조정
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 피방울 초기화
    const dropCount = 25;
    const drops: Drop[] = Array.from({ length: dropCount }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * -window.innerHeight,
      r: 3 + Math.random() * 5,
      speed: 1 + Math.random(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const drop of drops) {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2);
        ctx.fillStyle = 'darkred';
        ctx.fill();

        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -50;
          drop.x = Math.random() * canvas.width; // 위치 랜덤 재배치
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    // 정리
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    />
  );
}
