"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Baby,
  Sparkles,
  GraduationCap,
  Heart,
  Stars,
  Crown,
  Calendar,
} from "lucide-react";
import { TIMELINE_DATA, TimelineItem } from "@/data/timeline";
import WashiTape from "@/components/common/WashiTape";

export default function MemoryTimeline() {
  const getIcon = (iconName: TimelineItem["iconName"]) => {
    switch (iconName) {
      case "Baby":
        return Baby;
      case "Sparkles":
        return Sparkles;
      case "GraduationCap":
        return GraduationCap;
      case "Heart":
        return Heart;
      case "Stars":
        return Stars;
      case "Crown":
        return Crown;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="timeline-section" className="py-20 px-4 relative overflow-hidden bg-[#FAF4EB]/60">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#FCE7EC]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#F8CAD5]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F8CAD5] text-xs font-serif text-[#9B1B48] uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#CFA06E]" />
              <span>Chặng Đường 22 Năm Rực Rỡ</span>
              <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#701133] mb-3">
              Memory Timeline: 2004 — 2026
            </h2>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-[#5D4650] font-serif leading-relaxed">
              Hành trình trưởng thành từ một thiên thần nhỏ bé đến một cô gái tuổi 22 xinh đẹp, thông minh và tràn ngập tình yêu thương.
            </p>
          </motion.div>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical floral line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#F8CAD5] via-[#9B1B48] to-[#F8CAD5] rounded-full hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#F8CAD5] via-[#9B1B48] to-[#F8CAD5] rounded-full sm:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, idx) => {
              const IconComponent = getIcon(item.iconName);
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Icon in center */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#9B1B48] to-[#B83A5D] border-4 border-white shadow-lg flex items-center justify-center text-white">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${
                      isEven ? "sm:pr-12" : "sm:pl-12"
                    }`}
                  >
                    <div className="scrapbook-paper rounded-2xl p-6 sm:p-7 relative border border-[#F3E9DA] shadow-md hover:scale-[1.01] transition-transform duration-300">
                      <WashiTape
                        color={isEven ? "pink" : "gold"}
                        angle={isEven ? -2 : 2}
                        className="absolute -top-2.5 right-6 z-10"
                      />

                      {/* Header badge */}
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-2xl font-bold text-[#701133]">
                            {item.year}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#FCE7EC] text-[11px] font-serif font-semibold text-[#9B1B48]">
                            {item.age}
                          </span>
                        </div>
                        {item.exactDate && (
                          <span className="text-xs font-mono text-[#A66378]">
                            {item.exactDate}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#701133] mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="font-serif text-sm text-[#5D4650] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tag footer */}
                      <div className="pt-3 border-t border-[#F8CAD5]/50 flex items-center justify-between">
                        <span className="text-xs font-serif italic text-[#9B1B48] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
                          <span>{item.tag}</span>
                        </span>
                        <Heart className="w-3.5 h-3.5 fill-[#F8CAD5] text-[#9B1B48]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

