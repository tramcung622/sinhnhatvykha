"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { MEMORIES_DATA, MemoryItem } from "@/data/memories";
import MemoryCard from "./MemoryCard";
import Lightbox from "./Lightbox";

export default function MemoriesGallery() {
  const [selectedItem, setSelectedItem] = useState<MemoryItem | null>(null);
  const [filter, setFilter] = useState<"all" | "highlights" | "smile" | "sweet22">("all");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = MEMORIES_DATA.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const INITIAL_COUNT = 12;
  const displayedItems = showAll || filter !== "all" 
    ? filteredItems 
    : filteredItems.slice(0, INITIAL_COUNT);

  return (
    <section id="memories-section" className="py-20 px-4 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#FCE7EC]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F8CAD5] text-xs font-serif text-[#9B1B48] uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#CFA06E]" />
              <span>Cuốn Album Scrapbook • 35 Khoảnh Khắc</span>
              <Heart className="w-3.5 h-3.5 fill-[#F8CAD5] text-[#9B1B48]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#701133] mb-3">
              Photo Memories Của Anh Vy Kha
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5D4650] font-serif leading-relaxed">
              Toàn bộ 35 bức ảnh lưu giữ phong độ, nụ cười ấm áp và từng khoảnh khắc ngọt ngào nhất của anh Vy Kha trên hành trình thanh xuân.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => { setFilter("all"); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif transition-all duration-300 ${
                filter === "all"
                  ? "bg-[#9B1B48] text-white shadow-md scale-105"
                  : "bg-white/80 text-[#701133] border border-[#F8CAD5] hover:bg-[#FCE7EC]"
              }`}
            >
              Tất cả ({MEMORIES_DATA.length} ảnh)
            </button>
            <button
              type="button"
              onClick={() => { setFilter("highlights"); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif transition-all duration-300 ${
                filter === "highlights"
                  ? "bg-[#9B1B48] text-white shadow-md scale-105"
                  : "bg-white/80 text-[#701133] border border-[#F8CAD5] hover:bg-[#FCE7EC]"
              }`}
            >
              Khoảnh khắc nổi bật ✨
            </button>
            <button
              type="button"
              onClick={() => { setFilter("smile"); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif transition-all duration-300 ${
                filter === "smile"
                  ? "bg-[#9B1B48] text-white shadow-md scale-105"
                  : "bg-white/80 text-[#701133] border border-[#F8CAD5] hover:bg-[#FCE7EC]"
              }`}
            >
              Nụ cười rạng rỡ 🌸
            </button>
            <button
              type="button"
              onClick={() => { setFilter("sweet22"); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif transition-all duration-300 ${
                filter === "sweet22"
                  ? "bg-[#9B1B48] text-white shadow-md scale-105"
                  : "bg-white/80 text-[#701133] border border-[#F8CAD5] hover:bg-[#FCE7EC]"
              }`}
            >
              Cột mốc tuổi 22 🎂
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              >
                <MemoryCard
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand / Show all button */}
        {filter === "all" && filteredItems.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#FAF4EB] text-[#701133] border-2 border-[#F8CAD5] font-serif text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 text-[#9B1B48]" />
                  <span>Thu gọn (Hiển thị 12 ảnh)</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-[#9B1B48]" />
                  <span>Xem thêm {filteredItems.length - INITIAL_COUNT} ảnh còn lại (Toàn bộ 35 ảnh)</span>
                  <Sparkles className="w-4 h-4 text-[#CFA06E]" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Location note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A66378] font-serif inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF4EB] border border-[#F8CAD5]/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
            <span>Ảnh được lấy trực tiếp từ thư mục <code className="font-mono text-[#9B1B48]">public/images/anh1.jpg</code> đến <code className="font-mono text-[#9B1B48]">anh35.jpg</code></span>
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={!!selectedItem}
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newIndex) => setSelectedItem(filteredItems[newIndex])}
      />
    </section>
  );
}
