'use client';

import { useEffect, useRef } from 'react';
import Box2DFactory from 'box2d-wasm';

const RouletteGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameInstanceRef = useRef<any>(null);

  useEffect(() => {
    let box2d: any;
    let animationFrameId: number;

    const initGame = async () => {
      try {
        box2d = await Box2DFactory();
        const canvas = canvasRef.current;
        if (!canvas) return;

        // 게임 초기화 로직
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // box2d 월드 설정
        const gravity = new box2d.b2Vec2(0.0, -10.0);
        const world = new box2d.b2World(gravity);

        // 게임 루프
        const gameLoop = () => {
          world.Step(1/60, 8, 3);
          // 렌더링 로직
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // 여기에 게임 오브젝트 렌더링 로직 추가

          animationFrameId = requestAnimationFrame(gameLoop);
        };

        gameLoop();
      } catch (error) {
        console.error('Failed to initialize Box2D:', error);
      }
    };

    initGame();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (box2d) {
        box2d.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ border: '1px solid black' }}
    />
  );
};

export default RouletteGame;