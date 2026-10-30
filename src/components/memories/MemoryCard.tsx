"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles, Image as ImageIcon } from "lucide-react";
import { MemoryItem } from "@/data/memories";
import WashiTape from "@/components/common/WashiTape";

interface MemoryCardProps {
  item: MemoryItem;
  onClick: () => void;
}

export default function MemoryCard({ item, onClick }: MemoryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className={`polaroid-frame p-3 sm:p-4 pb-5 rounded-sm bg-white border border-[#F3E9DA] shadow-md cursor-pointer relative group transition-all duration-300 ${item.rotation}`}
    >
      {/* Washi tape at top */}
      <WashiTape
        color={item.tapeColor}
        angle={item.id % 2 === 0 ? 3 : -3}
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20"
      />

      {/* Photo Frame Container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-[#FAF4EB]">
        {/* Aesthetic romantic placeholder (always present underneath) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCE7EC] via-[#FFFDF8] to-[#F8CAD5] p-4 flex flex-col items-center justify-center text-center border border-dashed border-[#F4A5B9]/60 select-none">
          <div className="p-3 rounded-full bg-white/80 text-[#9B1B48] shadow-sm mb-2 group-hover:scale-110 transition-transform">
            <ImageIcon className="w-6 h-6" />
          </div>
          <span className="font-handwriting text-2xl text-[#701133] leading-tight">
            {item.title}
          </span>
          <span className="text-[11px] font-serif text-[#A66378] mt-1 max-w-[180px] line-clamp-2">
            {item.caption}
          </span>
          <span className="mt-2 text-[10px] px-2.5 py-0.5 rounded-full bg-white/90 text-[#9B1B48] font-mono border border-[#F8CAD5]">
            {item.filename}
          </span>
        </div>

        {/* Real photo overlay (fades in when loaded, hides on error) */}
        {!hasError && (
          <Image
            src={item.src}
            alt={item.title}
            fill
            className={`object-cover group-hover:scale-105 transition-all duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-white/90 text-xs font-serif text-[#701133] shadow-md flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
            <span>Xem chi tiết</span>
          </span>
        </div>
      </div>

      {/* Polaroid bottom caption */}
      <div className="mt-3 text-center px-1">
        <div className="flex items-center justify-center gap-1.5 mb-0.5">
          <span className="text-[10px] font-serif tracking-wider uppercase text-[#B83A5D] font-semibold">
            {item.year}
          </span>
        </div>
        <h4 className="font-handwriting text-xl sm:text-2xl text-[#701133] truncate">
          {item.title}
        </h4>
        <div className="flex items-center justify-center gap-1 mt-1 text-[#CFA06E]">
          <Heart className="w-3 h-3 fill-[#F8CAD5] text-[#9B1B48]" />
          <span className="text-[11px] font-serif text-[#735D67] truncate max-w-[190px]">
            {item.caption}
          </span>
        </div>
      </div>
    </div>
  );
}
