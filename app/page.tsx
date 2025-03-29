'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// box2d-wasm 초기화 로직을 클라이언트 사이드에서만 실행되도록 dynamic import 사용
const RouletteGame = dynamic(() => import('@/components/RouletteGame'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Marble Roulette</h1>
      <RouletteGame />
    </main>
  );
}