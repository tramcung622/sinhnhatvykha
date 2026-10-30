"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen, Heart, Sparkles, Feather } from "lucide-react";
import { LOVE_LETTER_DATA } from "@/data/letter";
import WashiTape from "@/components/common/WashiTape";
import { triggerBirthdayConfetti } from "@/utils/confetti";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      triggerBirthdayConfetti();
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="love-letter" className="py-20 px-4 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FCE7EC]/50 via-[#F8CAD5]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F8CAD5] text-xs font-serif text-[#9B1B48] uppercase tracking-wider mb-3">
              <Feather className="w-3.5 h-3.5 text-[#CFA06E]" />
              <span>Tâm Thư Sinh Nhật Tuổi 22</span>
              <Heart className="w-3.5 h-3.5 fill-[#F8CAD5] text-[#9B1B48]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#701133] mb-3">
              Bức Thư Dành Riêng Cho Vy Kha
            </h2>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-[#5D4650] font-serif leading-relaxed">
              Từng dòng chữ được viết bằng tất cả sự chân thành, gửi gắm trọn vẹn những lời chúc tốt đẹp nhất cho tuổi mới của em.
            </p>
          </motion.div>
        </div>

        {/* Envelope & Letter Container */}
        <div className="relative">
          {/* Closed Envelope View */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-xl mx-auto cursor-pointer group"
              onClick={handleToggle}
            >
              <WashiTape
                color="gold"
                angle={-2}
                className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
              />

              <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-[#FFFDF9] via-[#FAF4EB] to-[#FCE7EC] border-2 border-[#F8CAD5] shadow-[0_15px_35px_rgba(155,27,72,0.12)] hover:shadow-[0_20px_45px_rgba(155,27,72,0.22)] transition-all duration-500 text-center relative overflow-hidden group-hover:-translate-y-1">
                {/* Vintage postal stamp on top right */}
                <div className="absolute top-5 right-5 p-2 rounded-sm border border-dashed border-[#B83A5D]/60 bg-white shadow-sm rotate-6">
                  <span className="text-[10px] font-mono text-[#9B1B48] block leading-tight font-bold">
                    AIR MAIL
                  </span>
                  <span className="text-[9px] font-serif text-[#CFA06E] block">
                    31.10.2026
                  </span>
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#9B1B48] to-[#B83A5D] text-white mx-auto flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#701133] mb-2">
                  Thư Chúc Mừng Sinh Nhật
                </h3>
                <p className="font-handwriting text-xl text-[#9B1B48] mb-6">
                  Gửi đến: Anh Vy Kha (Chàng trai mùa thu của em)
                </p>

                {/* Wax seal stamp */}
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9B1B48] text-white text-sm font-semibold shadow-md group-hover:bg-[#701133] transition-colors">
                  <MailOpen className="w-4 h-4" />
                  <span>Chạm để mở phong thư</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Opened Letter View */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="scrapbook-paper rounded-3xl p-6 sm:p-12 relative border border-[#E6D7C8] shadow-2xl bg-[#FFFDF9]"
              >
                {/* Washi tapes on corners */}
                <WashiTape
                  color="pink"
                  angle={-3}
                  className="absolute -top-3 left-8 z-10"
                />
                <WashiTape
                  color="gold"
                  angle={3}
                  className="absolute -top-3 right-8 z-10"
                />

                {/* Letter Header */}
                <div className="border-b border-[#F8CAD5]/60 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-serif uppercase tracking-widest text-[#B83A5D] font-semibold block mb-1">
                      {LOVE_LETTER_DATA.date}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#701133]">
                      {LOVE_LETTER_DATA.title}
                    </h3>
                  </div>

                  {/* Stamp badge */}
                  <div className="p-2 px-3 rounded-sm border border-dashed border-[#B83A5D]/50 bg-[#FAF4EB] text-center rotate-2">
                    <span className="text-[10px] font-mono text-[#701133] block font-bold">
                      FROM HEART
                    </span>
                    <span className="text-[9px] font-serif text-[#9B1B48]">
                      Vy Kha • Tuổi 22
                    </span>
                  </div>
                </div>

                {/* Salutation */}
                <p className="font-handwriting text-2xl sm:text-3xl text-[#9B1B48] mb-6">
                  {LOVE_LETTER_DATA.salutation}
                </p>

                {/* Paragraphs */}
                <div className="space-y-5 text-base sm:text-lg font-serif text-[#4A3B43] leading-relaxed">
                  {LOVE_LETTER_DATA.paragraphs.map((p, idx) => (
                    <p key={idx} className="indent-6 sm:indent-8 text-justify">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Closing & Signature */}
                <div className="mt-10 pt-6 border-t border-[#F8CAD5]/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-serif italic text-[#735D67]">
                      {LOVE_LETTER_DATA.closing}
                    </p>
                    <p className="font-handwriting text-3xl sm:text-4xl text-[#701133] mt-1">
                      {LOVE_LETTER_DATA.signature}
                    </p>
                  </div>

                  {/* Wax Seal Emblem */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#9B1B48] to-[#701133] text-white flex flex-col items-center justify-center shadow-lg border-2 border-white/80 select-none">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="text-[9px] font-serif font-bold tracking-wider mt-0.5">VK 22</span>
                  </div>
                </div>

                {/* Post Script */}
                {LOVE_LETTER_DATA.postScript && (
                  <div className="mt-6 p-4 rounded-xl bg-[#FAF4EB]/70 border border-[#F8CAD5]/60 text-xs sm:text-sm font-serif italic text-[#9B1B48] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#CFA06E] shrink-0" />
                    <span>{LOVE_LETTER_DATA.postScript}</span>
                  </div>
                )}

                {/* Close / Fold Button */}
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={handleToggle}
                    className="px-5 py-2 rounded-full bg-[#FAF4EB] hover:bg-[#FCE7EC] text-[#701133] text-xs font-serif border border-[#F8CAD5] transition-colors"
                  >
                    Gấp lại phong thư
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

