"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Flame, ArrowUp, Music } from "lucide-react";
import { triggerFireworks, triggerBirthdayConfetti } from "@/utils/confetti";
import WashiTape from "@/components/common/WashiTape";

export default function FinalWish() {
  const [fireworksCount, setFireworksCount] = useState(0);

  const handleLaunchFireworks = () => {
    setFireworksCount((prev) => prev + 1);
    triggerBirthdayConfetti();
    triggerFireworks(4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="final-wish" className="pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EB] to-[#FCE7EC]">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-t from-[#F8CAD5]/50 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Scrapbook card for the Final Wish */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="scrapbook-paper rounded-3xl p-8 sm:p-14 relative border border-[#E6D7C8] shadow-xl mb-12"
        >
          {/* Washi tapes on top */}
          <WashiTape
            color="pink"
            angle={-3}
            className="absolute -top-3 left-12 z-20"
          />
          <WashiTape
            color="gold"
            angle={2}
            className="absolute -top-3 right-12 z-20"
          />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] text-xs font-serif text-[#9B1B48] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
            <span>Lời Chúc Cuối & Trọn Vẹn Nhất</span>
            <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#701133] mb-4">
            Chúc Anh Vy Kha Tuổi 22 Ngập Tràn Hạnh Phúc & Thành Công!
          </h2>

          <div className="w-20 h-0.5 bg-[#F8CAD5] mx-auto mb-6" />

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#4A3B43] font-serif leading-relaxed mb-8">
            Mong rằng mỗi ngày mới trôi qua, anh đều đón nhận nhiều niềm vui, sự may mắn và năng lượng dồi dào. Mong rằng tuổi 22 sẽ mang đến cho anh Vy Kha thật nhiều cơ hội mới, sự nghiệp thăng hoa, vững vàng chạm tới mọi mục tiêu và luôn có em kề bên yêu thương, đồng hành cùng anh.
          </p>

          <p className="font-handwriting text-3xl sm:text-4xl text-[#9B1B48] mb-8">
            &ldquo;Tuổi 22 bản lĩnh, phong độ và luôn hạnh phúc anh nhé!&rdquo;
          </p>

          {/* Fireworks Celebration Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleLaunchFireworks}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9B1B48] via-[#B83A5D] to-[#9B1B48] text-white font-semibold text-base sm:text-lg shadow-[0_10px_30px_rgba(155,27,72,0.35)] hover:shadow-[0_15px_35px_rgba(155,27,72,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
            >
              <Flame className="w-5 h-5 text-[#FFD700] group-hover:animate-bounce" />
              <span>Bắn Pháo Hoa Mừng Anh Vy Kha!</span>
              <Sparkles className="w-5 h-5 text-[#FFD700]" />
            </button>
          </div>

          {fireworksCount > 0 && (
            <p className="text-xs font-serif text-[#A66378] mt-3">
              Đã bắn pháo hoa <span className="font-bold text-[#9B1B48]">{fireworksCount}</span> lần chúc mừng Vy Kha! 🎉
            </p>
          )}
        </motion.div>

        {/* Footer Navigation & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-[#735D67] border-t border-[#F8CAD5]/50 pt-8">
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 fill-[#F8CAD5] text-[#9B1B48]" />
            <span>Dành tặng riêng cho <strong>Vy Kha</strong> (31.10.2004 — 31.10.2026)</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#701133] border border-[#F8CAD5] transition-all hover:scale-105"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Lên đầu trang</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

