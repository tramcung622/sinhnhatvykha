"use client";

import React, { useEffect, useState } from "react";

interface HeartItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  character: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    const characters = ["💖", "✨", "🌸", "💕", "🌷", "🤍", "⭐"];
    const generated: HeartItem[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage 0-100
      size: Math.floor(Math.random() * 14) + 12, // 12px to 26px
      duration: Math.random() * 10 + 12, // 12s to 22s
      delay: Math.random() * 8, // 0 to 8s
      opacity: Math.random() * 0.45 + 0.25, // 0.25 to 0.70
      character: characters[Math.floor(Math.random() * characters.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute select-none will-change-transform"
          style={{
            left: `${h.left}%`,
            bottom: "-30px",
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `floatUpwards ${h.duration}s linear infinite`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.character}
        </span>
      ))}
      <style jsx>{`
        @keyframes floatUpwards {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          50% {
            transform: translateY(-50vh) rotate(180deg) scale(1.1);
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-105vh) rotate(360deg) scale(0.9);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

