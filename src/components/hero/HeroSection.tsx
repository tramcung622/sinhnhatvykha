"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Calendar, Gift, ChevronDown } from "lucide-react";
import { BIRTHDAY_CONFIG } from "@/data/config";
import WashiTape from "@/components/common/WashiTape";
import StampBadge from "@/components/common/StampBadge";
import { triggerBirthdayConfetti } from "@/utils/confetti";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isBirthday: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true });

  const [hasTriggeredIntroConfetti, setHasTriggeredIntroConfetti] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-10-31T00:00:00+07:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true });
        if (!hasTriggeredIntroConfetti) {
          triggerBirthdayConfetti();
          setHasTriggeredIntroConfetti(true);
        }
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isBirthday: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [hasTriggeredIntroConfetti]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-[#FCE7EC]/60 via-[#F8CAD5]/40 to-[#FFFDF8] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-20 flex flex-col items-center">
        {/* Scrapbook Stamp */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <StampBadge
            label="SPECIAL EDITION"
            sublabel="Vy Kha • 31.10.2004"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm sm:text-base font-serif uppercase tracking-[0.25em] text-[#B83A5D] font-medium mb-3 flex items-center gap-2 justify-center"
        >
          <Heart className="w-4 h-4 fill-[#F8CAD5] text-[#9B1B48]" />
          <span>MỪNG SINH NHẬT TUỔI 22 RỰC RỠ</span>
          <Heart className="w-4 h-4 fill-[#F8CAD5] text-[#9B1B48]" />
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, type: "spring" }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#701133] leading-tight mb-4 tracking-tight drop-shadow-sm"
        >
          Happy 22nd Birthday, <br />
          <span className="font-handwriting font-normal text-[#9B1B48] text-5xl sm:text-7xl md:text-8xl block mt-1 hover:scale-105 transition-transform duration-300">
            Vy Kha
          </span>
        </motion.h1>

        {/* Milestone Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF4EB]/80 border border-[#F8CAD5] text-xs sm:text-sm font-serif text-[#701133] shadow-sm mb-6"
        >
          <Calendar className="w-4 h-4 text-[#9B1B48]" />
          <span>{BIRTHDAY_CONFIG.birthDateFormatted}</span>
          <span className="text-[#CFA06E]">✦</span>
          <span className="font-semibold text-[#9B1B48]">{BIRTHDAY_CONFIG.celebrationDateFormatted}</span>
        </motion.div>

        {/* Hero Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-xl mx-auto text-base sm:text-lg text-[#5D4650] font-serif italic mb-8 leading-relaxed px-4"
        >
          &ldquo;{BIRTHDAY_CONFIG.heroQuote}&rdquo;
        </motion.p>

        {/* Hero Photo Spotlight with Polaroid Look */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative mb-10 group"
        >
          <WashiTape
            color="pink"
            angle={-3}
            className="absolute -top-3 left-1/2 -translate-x-1/2 z-30"
          />

          <div className="polaroid-frame p-3 sm:p-4 pb-6 sm:pb-8 rounded-sm bg-white border border-[#F3E9DA] shadow-xl max-w-[280px] sm:max-w-[320px] mx-auto">
            <div className="relative w-60 sm:w-72 h-72 sm:h-80 overflow-hidden rounded-[2px] bg-[#FAF4EB]">
              <Image
                src="/images/anh1.jpg"
                alt="Vy Kha xinh đẹp tuổi 22"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 240px, 288px"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-handwriting text-2xl sm:text-3xl text-[#701133]">
                Vy Kha • Tuổi 22 phong độ & ấm áp
              </p>
              <p className="text-[11px] font-serif text-[#A66378] tracking-widest uppercase mt-0.5">
                31.10.2026 • Sinh nhật ngọt ngào
              </p>
            </div>
          </div>
        </motion.div>

        {/* Countdown / Birthday Status Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="w-full max-w-lg mb-8"
        >
          <div className="scrapbook-paper p-4 sm:p-6 rounded-2xl relative">
            <WashiTape
              color="gold"
              angle={2}
              className="absolute -top-2.5 right-6 z-10"
            />

            {timeLeft.isBirthday ? (
              <div className="text-center">
                <span className="inline-block text-2xl sm:text-3xl mb-1 animate-bounce">🎂 ✨ 🎉</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#701133]">
                  Hôm Nay Là Sinh Nhật Của Vy Kha!
                </h3>
                <p className="font-handwriting text-lg sm:text-xl text-[#B83A5D] mt-1">
                  Chúc chàng trai của em một ngày sinh nhật thật tuyệt vời, luôn phong độ, hạnh phúc và vạn sự như ý!
                </p>
              </div>
            ) : (
              <div>
                <p className="text-xs uppercase tracking-wider text-[#9B1B48] font-serif font-semibold text-center mb-3">
                  Đếm ngược đến khoảnh khắc sinh nhật tuổi 22
                </p>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                  {[
                    { label: "Ngày", value: timeLeft.days },
                    { label: "Giờ", value: timeLeft.hours },
                    { label: "Phút", value: timeLeft.minutes },
                    { label: "Giây", value: timeLeft.seconds },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/80 rounded-xl p-2.5 sm:p-3 border border-[#F8CAD5]/60 shadow-inner"
                    >
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#701133] block">
                        {String(item.value).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#A66378] font-medium uppercase">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            type="button"
            onClick={() => scrollToSection("birthday-cake-section")}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#9B1B48] to-[#B83A5D] text-white font-medium text-sm sm:text-base shadow-[0_8px_25px_rgba(155,27,72,0.3)] hover:shadow-[0_12px_30px_rgba(155,27,72,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <span>🎂 Thổi Nến Tuổi 22</span>
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
          </button>

          <button
            type="button"
            onClick={() => {
              triggerBirthdayConfetti();
              scrollToSection("special-gift");
            }}
            className="px-6 py-3.5 rounded-full bg-[#FFFDF8] hover:bg-[#FAF4EB] text-[#701133] border border-[#F8CAD5] font-medium text-sm sm:text-base shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <Gift className="w-4 h-4 text-[#9B1B48]" />
            <span>Mở Hộp Quà Đặc Biệt</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("memories-section")}
            className="px-6 py-3.5 rounded-full bg-[#FFFDF8] hover:bg-[#FAF4EB] text-[#701133] border border-[#F8CAD5] font-medium text-sm sm:text-base shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <span>35 Ảnh Kỷ Niệm</span>
            <Heart className="w-4 h-4 fill-[#F8CAD5] text-[#9B1B48]" />
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-1 cursor-pointer select-none text-[#A66378] hover:text-[#9B1B48] transition-colors"
          onClick={() => scrollToSection("birthday-cake-section")}
        >
          <span className="text-xs font-serif tracking-widest uppercase">Cuộn xuống để khám phá</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

