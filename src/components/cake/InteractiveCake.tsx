"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Wind, RotateCcw, Flame } from "lucide-react";
import { triggerBirthdayConfetti, triggerFireworks } from "@/utils/confetti";
import WashiTape from "@/components/common/WashiTape";

export default function InteractiveCake() {
  const [isLit, setIsLit] = useState(true);
  const [isBlowing, setIsBlowing] = useState(false);
  const [wishGranted, setWishGranted] = useState(false);
  const [wishesCount, setWishesCount] = useState(0);

  // Play a soft wind & celebration chime via Web Audio API
  const playBlowSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      
      // Gentle wind whoosh (noise buffer)
      const bufferSize = ctx.sampleRate * 0.4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.35);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();

      // Followed by sweet celebratory magic chime
      setTimeout(() => {
        const chimeNotes = [523.25, 659.25, 783.99, 1046.50]; // C5 E5 G5 C6
        chimeNotes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const chimeGain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
          chimeGain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
          chimeGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + idx * 0.08 + 0.02);
          chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.5);

          osc.connect(chimeGain);
          chimeGain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.08);
          osc.stop(ctx.currentTime + idx * 0.08 + 0.55);
        });
      }, 300);
    } catch {
      // Audio not supported or blocked
    }
  };

  const handleBlowCandles = () => {
    if (!isLit || isBlowing) return;

    setIsBlowing(true);
    playBlowSound();

    setTimeout(() => {
      setIsLit(false);
      setIsBlowing(false);
      setWishGranted(true);
      setWishesCount((prev) => prev + 1);
      triggerBirthdayConfetti();
      triggerFireworks(3500);
    }, 450);
  };

  const handleRelight = () => {
    setIsLit(true);
    setWishGranted(false);
  };

  return (
    <section id="birthday-cake-section" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-[#FAF4EB]/80 to-transparent">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#FCE7EC]/60 via-[#F8CAD5]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-block"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F8CAD5] text-xs font-serif text-[#9B1B48] uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#E87293]" />
            <span>Khoảnh Khắc Cầu Nguyện Tuổi 22</span>
            <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#701133] mb-3">
            Thổi Nến Sinh Nhật Tuổi 22
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#5D4650] font-serif leading-relaxed">
            {isLit
              ? "Anh hãy nhắm mắt lại, ước một điều ước thật chân thành rồi bấm vào bánh hoặc nút bên dưới để thổi tắt nến nhé! ✨"
              : "Nến đã tắt và điều ước đã được gửi đi! Chúc mọi mong ước của anh đều thành hiện thực 💖"}
          </p>
        </motion.div>

        {/* Interactive Cake Container */}
        <div className="relative py-8 flex flex-col items-center">
          {/* Gentle Floating Stars / Sparkles */}
          <div className="absolute inset-0 pointer-events-none flex justify-around items-center opacity-60">
            <span className="text-2xl animate-float-gentle select-none">✨</span>
            <span className="text-xl animate-pulse-glow select-none">🌸</span>
            <span className="text-2xl animate-float-gentle select-none">⭐</span>
          </div>

          {/* Cake Stage */}
          <div
            onClick={isLit ? handleBlowCandles : undefined}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && isLit && handleBlowCandles()}
            className={`relative flex flex-col items-center justify-center p-6 select-none transition-transform duration-300 ${
              isLit ? "cursor-pointer group hover:scale-[1.02]" : "cursor-default"
            }`}
          >
            {/* Wind Breath effect during blowing */}
            <AnimatePresence>
              {isBlowing && (
                <motion.div
                  initial={{ opacity: 0, x: -60, scale: 0.6 }}
                  animate={{ opacity: 1, x: 20, scale: 1.2 }}
                  exit={{ opacity: 0, x: 80, scale: 0.8 }}
                  transition={{ duration: 0.45 }}
                  className="absolute -top-6 left-1/4 z-40 pointer-events-none flex items-center gap-1 text-white font-serif italic text-sm bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg border border-[#F8CAD5]"
                >
                  <Wind className="w-5 h-5 text-[#9B1B48] animate-spin" />
                  <span className="text-[#701133] font-semibold">Phùuu... Thổi nến!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CANDLES NUMBER 22 */}
            <div className="flex items-end justify-center gap-6 sm:gap-8 mb-[-4px] relative z-20">
              {/* First Candle "2" */}
              <div className="flex flex-col items-center relative">
                {/* Flame 1 */}
                <div className="h-14 flex items-end justify-center relative">
                  {isLit ? (
                    <div className="relative flex items-center justify-center">
                      {/* Outer golden glow */}
                      <div className="absolute w-12 h-16 rounded-full bg-orange-400/30 blur-md animate-pulse" />
                      {/* Main flickering flame */}
                      <div className="w-5 h-9 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 shadow-[0_0_15px_#f59e0b] animate-[candleFlicker_1.2s_ease-in-out_infinite]" />
                      {/* Inner blue base */}
                      <div className="absolute bottom-0 w-2.5 h-3 rounded-full bg-blue-400/80" />
                    </div>
                  ) : (
                    /* Smoke puff 1 */
                    <div className="flex flex-col items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400/70 animate-[smokeRise_1.6s_ease-out_infinite]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300/50 animate-[smokeRise_1.6s_ease-out_infinite_0.3s]" />
                    </div>
                  )}
                </div>

                {/* Candle Wick */}
                <div className="w-0.5 h-2.5 bg-neutral-800" />

                {/* Number 2 Candle Body */}
                <div className="w-12 h-16 rounded-t-xl bg-gradient-to-b from-[#FCE7EC] via-white to-[#F8CAD5] border-2 border-[#E87293] shadow-md flex items-center justify-center font-serif text-3xl font-extrabold text-[#701133] relative overflow-hidden">
                  <span className="relative z-10 drop-shadow-sm">2</span>
                  {/* Candle stripes / wax drip */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none" />
                  <div className="absolute top-0 w-full h-1 bg-[#E87293]/30" />
                </div>
              </div>

              {/* Second Candle "2" */}
              <div className="flex flex-col items-center relative">
                {/* Flame 2 */}
                <div className="h-14 flex items-end justify-center relative">
                  {isLit ? (
                    <div className="relative flex items-center justify-center">
                      {/* Outer golden glow */}
                      <div className="absolute w-12 h-16 rounded-full bg-orange-400/30 blur-md animate-pulse" />
                      {/* Main flickering flame with slight delay */}
                      <div className="w-5 h-9 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 shadow-[0_0_15px_#f59e0b] animate-[candleFlicker_1.4s_ease-in-out_infinite_0.2s]" />
                      {/* Inner blue base */}
                      <div className="absolute bottom-0 w-2.5 h-3 rounded-full bg-blue-400/80" />
                    </div>
                  ) : (
                    /* Smoke puff 2 */
                    <div className="flex flex-col items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400/70 animate-[smokeRise_1.6s_ease-out_infinite_0.15s]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300/50 animate-[smokeRise_1.6s_ease-out_infinite_0.45s]" />
                    </div>
                  )}
                </div>

                {/* Candle Wick */}
                <div className="w-0.5 h-2.5 bg-neutral-800" />

                {/* Number 2 Candle Body */}
                <div className="w-12 h-16 rounded-t-xl bg-gradient-to-b from-[#FCE7EC] via-white to-[#F8CAD5] border-2 border-[#E87293] shadow-md flex items-center justify-center font-serif text-3xl font-extrabold text-[#701133] relative overflow-hidden">
                  <span className="relative z-10 drop-shadow-sm">2</span>
                  {/* Candle stripes / wax drip */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none" />
                  <div className="absolute top-0 w-full h-1 bg-[#E87293]/30" />
                </div>
              </div>
            </div>

            {/* CAKE TIER 1 (TOP TIER) */}
            <div className="relative z-10 w-48 sm:w-56 h-16 rounded-t-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EB] to-[#FCE7EC] border border-[#F8CAD5] shadow-md flex flex-col items-center justify-between overflow-hidden">
              {/* Cream Drip Top */}
              <div className="w-full flex justify-around pt-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-white shadow-sm border-b border-[#F8CAD5]/50 -mt-1"
                  />
                ))}
              </div>
              {/* Cherries / Strawberry Topping */}
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-sm select-none">🍓</span>
                <span className="text-xs select-none">🌸</span>
                <span className="text-sm select-none">🍓</span>
                <span className="text-xs select-none">🌸</span>
                <span className="text-sm select-none">🍓</span>
              </div>
            </div>

            {/* CAKE TIER 2 (MIDDLE TIER) */}
            <div className="relative z-0 w-64 sm:w-72 h-20 rounded-t-xl bg-gradient-to-b from-[#FCE7EC] via-[#F8CAD5] to-[#FCE7EC] border-x border-[#F4A5B9] shadow-lg flex flex-col items-center justify-center -mt-2">
              {/* Elegant Burgundy Ribbon Band */}
              <div className="w-full h-4 bg-gradient-to-r from-[#9B1B48] via-[#B83A5D] to-[#9B1B48] shadow-sm flex items-center justify-center">
                <span className="text-[10px] font-serif text-white tracking-widest uppercase font-semibold">
                  VY KHA • 22 TUỔI
                </span>
              </div>
              {/* Cream swirls */}
              <div className="w-full flex justify-around px-3 mt-1.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className="text-xs select-none opacity-80">
                    🤍
                  </span>
                ))}
              </div>
            </div>

            {/* CAKE TIER 3 (BOTTOM TIER) */}
            <div className="w-76 sm:w-88 h-24 rounded-t-xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EB] to-[#F3E9DA] border border-[#E6D7C8] shadow-xl flex flex-col items-center justify-between p-2 -mt-2">
              {/* Golden pearl swirls */}
              <div className="w-full flex justify-around">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3.5 h-3.5 rounded-full bg-[#E5AC99]/60 shadow-inner"
                  />
                ))}
              </div>
              <p className="font-handwriting text-2xl text-[#9B1B48] font-bold">
                Happy 22nd Birthday!
              </p>
              {/* Cake base scalloped trim */}
              <div className="w-full flex justify-around pb-1">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-2 rounded-t-full bg-[#FCE7EC] border-t border-[#F8CAD5]"
                  />
                ))}
              </div>
            </div>

            {/* CAKE STAND PLATE */}
            <div className="w-84 sm:w-96 h-5 rounded-full bg-gradient-to-r from-[#E5AC99] via-[#FFFDF8] to-[#E5AC99] border border-[#CFA06E]/60 shadow-[0_12px_30px_rgba(155,27,72,0.18)] -mt-1 relative z-0 flex items-center justify-center">
              <div className="w-2/3 h-1 bg-[#CFA06E]/40 rounded-full" />
            </div>
            {/* Stand Pedestal Foot */}
            <div className="w-32 h-6 bg-gradient-to-b from-[#FAF4EB] to-[#E6D7C8] border-x border-[#D6C2AA] shadow-md rounded-b-xl flex items-center justify-center">
              <div className="w-48 h-3 rounded-full bg-[#E5AC99]/80 shadow-inner mt-4" />
            </div>

            {/* Hint label over cake */}
            {isLit && (
              <div className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 border border-[#F8CAD5] shadow-md text-xs font-serif text-[#701133] animate-bounce select-none">
                <Wind className="w-4 h-4 text-[#9B1B48]" />
                <span>Chạm vào bánh để thổi tắt nến 22 nhé anh!</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {isLit ? (
              <button
                type="button"
                onClick={handleBlowCandles}
                disabled={isBlowing}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9B1B48] to-[#B83A5D] text-white font-medium text-sm sm:text-base shadow-[0_8px_25px_rgba(155,27,72,0.3)] hover:shadow-[0_12px_30px_rgba(155,27,72,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <Wind className="w-4 h-4" />
                <span>Thổi Tắt Nến Tuổi 22</span>
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleRelight}
                className="px-6 py-3 rounded-full bg-white hover:bg-[#FAF4EB] text-[#701133] border border-[#F8CAD5] font-serif text-xs sm:text-sm font-semibold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4 text-[#9B1B48]" />
                <span>Thắp Lại Nến & Ước Lần Nữa (Đã ước {wishesCount} lần)</span>
              </button>
            )}
          </div>

          {/* Heartwarming Wish Reveal when blown out */}
          <AnimatePresence>
            {wishGranted && (
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="mt-8 max-w-lg w-full scrapbook-paper p-6 sm:p-8 rounded-3xl border border-[#F8CAD5] shadow-xl text-center relative"
              >
                <WashiTape
                  color="gold"
                  angle={-2}
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2"
                />

                <span className="text-3xl inline-block mb-2 animate-bounce">
                  🎉 ✨ 🎂
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#701133] mb-2">
                  Điều Ước Của Anh Chắc Chắn Sẽ Thành Hiện Thực!
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#5D4650] leading-relaxed mb-4">
                  Em chúc chàng trai tuổi 22 của em một tuổi mới thật nhiều sức khỏe, luôn tự tin, kiên định, công việc hanh thông và mãi là chỗ dựa ấm áp nhất của em!
                </p>

                <p className="font-handwriting text-2xl text-[#9B1B48]">
                  Em yêu và tự hào về anh rất nhiều ❤️
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Embedded CSS animations for flickering candle flame and smoke */}
      <style jsx>{`
        @keyframes candleFlicker {
          0%, 100% {
            transform: scale(1) rotate(-1deg);
            opacity: 0.95;
          }
          25% {
            transform: scale(1.1, 0.95) rotate(2deg);
            opacity: 1;
          }
          50% {
            transform: scale(0.92, 1.06) rotate(-2deg);
            opacity: 0.9;
          }
          75% {
            transform: scale(1.05, 1) rotate(1deg);
            opacity: 1;
          }
        }
        @keyframes smokeRise {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(6px) scale(1.3);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-45px) translateX(12px) scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

