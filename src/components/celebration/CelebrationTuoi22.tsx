"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Crown, Clock, Smile, Award } from "lucide-react";
import { BIRTHDAY_CONFIG } from "@/data/config";
import WashiTape from "@/components/common/WashiTape";
import { triggerBirthdayConfetti } from "@/utils/confetti";

export default function CelebrationTuoi22() {
  const [blessingsCount, setBlessingsCount] = useState(22);
  const [hasSentBlessing, setHasSentBlessing] = useState(false);

  const handleSendBlessing = () => {
    setBlessingsCount((prev) => prev + 1);
    setHasSentBlessing(true);
    triggerBirthdayConfetti();
  };

  const stats = [
    {
      icon: Clock,
      number: `${BIRTHDAY_CONFIG.daysOnEarth} Ngày`,
      title: "Hiệu diện trên thế gian",
      desc: "Mỗi ngày trôi qua đều là một món quà kỳ diệu.",
    },
    {
      icon: Smile,
      number: BIRTHDAY_CONFIG.hoursOfSmiles,
      title: "Giờ lan tỏa nụ cười",
      desc: "Nụ cười ấm áp thắp sáng những nơi anh đi qua.",
    },
    {
      icon: Crown,
      number: "22 Tuổi",
      title: "Độ tuổi bản lĩnh nhất",
      desc: "Thanh xuân nhiệt huyết, phong độ và vững vàng.",
    },
    {
      icon: Heart,
      number: "Vô tận (∞)",
      title: "Yêu thương đong đầy",
      desc: "Luôn được trân quý bởi gia đình và người thương.",
    },
  ];

  const reasons = [
    {
      title: "Bản Lĩnh & Trưởng Thành",
      content: "Tuổi 22 là lúc chàng trai Vy Kha ngày càng chững chạc, tự tin, có hoài bão lớn và sẵn sàng làm chỗ dựa vững chắc.",
      icon: "💪",
    },
    {
      title: "Trái Tim Ấm Áp & Chân Thành",
      content: "Cách anh quan tâm, chăm sóc và luôn ân cần nhường nhịn khiến em luôn cảm thấy an lòng và được yêu thương.",
      icon: "💖",
    },
    {
      title: "Thông Minh & Có Chí Hướng",
      content: "Một chàng trai độc lập, chăm chỉ học hỏi, có trách nhiệm và luôn kiên định với những mục tiêu đã chọn.",
      icon: "✨",
    },
    {
      title: "Xứng Đáng Với Thành Công Rực Rỡ",
      content: "Vy Kha xứng đáng với mọi điều may mắn, hạnh phúc, sự nghiệp thăng hoa và những thành quả ngọt ngào nhất.",
      icon: "👑",
    },
  ];

  return (
    <section id="celebration-tuoi-22" className="py-20 px-4 relative overflow-hidden">
      {/* Background Soft Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FCE7EC]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8CAD5]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F8CAD5] text-xs font-serif text-[#9B1B48] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
              <span>Dấu Mốc Tuổi 22 Đáng Tự Hào</span>
              <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#701133] mb-3">
              Chào Tuổi 22 Rực Rỡ, Anh Vy Kha!
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5D4650] font-serif leading-relaxed">
              22 năm là một hành trình kỳ diệu – từng ngày anh lớn lên đều được dệt nên bởi tình yêu thương, sự nỗ lực và ý chí không ngừng nghỉ.
            </p>
          </motion.div>
        </div>

        {/* 4 Stats Cards with Scrapbook aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="scrapbook-paper rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden h-full flex flex-col justify-between">
                  <WashiTape
                    color={idx % 2 === 0 ? "pink" : "gold"}
                    angle={idx % 2 === 0 ? -2 : 2}
                    className="absolute -top-2 left-1/2 -translate-x-1/2"
                  />

                  <div className="mt-2 mb-4 inline-flex p-3 rounded-full bg-[#FCE7EC] text-[#9B1B48] mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#701133] mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#9B1B48] mb-2 font-serif">
                      {stat.title}
                    </p>
                    <p className="text-xs sm:text-sm text-[#735D67] font-serif leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Spotlight: 4 Reasons Why Age 22 is so Special */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="scrapbook-paper rounded-3xl p-6 sm:p-10 border border-[#F3E9DA] relative mb-12 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-[#F8CAD5]/50 pb-6">
            <div>
              <span className="text-xs font-serif text-[#9B1B48] font-bold uppercase tracking-wider block mb-1">
                ✦ TÂM TÌNH TUỔI 22
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#701133]">
                Những Điều Khiến Anh Vy Kha Luôn Thật Đặc Biệt Trong Lòng Em
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF8] border border-[#F8CAD5] text-xs font-serif text-[#701133]">
              <Award className="w-4 h-4 text-[#CFA06E]" />
              <span>Chàng trai sinh ngày 31.10.2004</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/70 border border-[#F8CAD5]/60 hover:bg-white transition-all duration-300 shadow-sm flex items-start gap-4"
              >
                <div className="text-3xl select-none">{r.icon}</div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#701133] mb-1">
                    {r.title}
                  </h4>
                  <p className="text-sm text-[#5D4650] font-serif leading-relaxed">
                    {r.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Blessing Button */}
          <div className="mt-8 pt-6 border-t border-[#F8CAD5]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-handwriting text-xl text-[#9B1B48]">
                &ldquo;Mỗi lời chúc gửi đi là trọn vẹn yêu thương dành cho anh Vy Kha&rdquo;
              </p>
              <p className="text-xs text-[#A66378] font-serif">
                Đã có <span className="font-bold text-[#701133]">{blessingsCount}</span> lời chúc yêu thương gửi đến anh hôm nay.
              </p>
            </div>

            <button
              type="button"
              onClick={handleSendBlessing}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9B1B48] to-[#B83A5D] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <Heart className={`w-4 h-4 fill-current ${hasSentBlessing ? "text-white" : ""}`} />
              <span>Gửi Thêm Lời Chúc Đến Anh</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
