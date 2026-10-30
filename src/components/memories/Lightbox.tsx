"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Sparkles, Image as ImageIcon } from "lucide-react";
import { MemoryItem } from "@/data/memories";

interface LightboxProps {
  isOpen: boolean;
  item: MemoryItem | null;
  items: MemoryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  isOpen,
  item,
  items,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentIndex = items.findIndex((i) => i.id === item?.id);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset image state when item changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [item?.id]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        {/* Backdrop click */}
        <div
          className="absolute inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl w-full bg-[#FFFDF8] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#F8CAD5]/50 flex flex-col md:flex-row z-10 max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#701133] hover:text-[#9B1B48] shadow-md transition-all"
            title="Đóng (ESC)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Container */}
          <div className="relative w-full md:w-3/5 bg-[#FAF4EB] flex items-center justify-center p-4 min-h-[300px] sm:min-h-[420px]">
            {/* Romantic placeholder underneath */}
            <div className="w-full h-[320px] sm:h-[480px] rounded-xl bg-gradient-to-br from-[#FCE7EC] via-[#FFFDF8] to-[#F8CAD5] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#F4A5B9]">
              <div className="p-4 rounded-full bg-white/80 text-[#9B1B48] shadow-md mb-4">
                <ImageIcon className="w-10 h-10" />
              </div>
              <span className="font-handwriting text-3xl text-[#701133] mb-1">
                {item.title}
              </span>
              <p className="text-xs font-serif text-[#A66378] max-w-xs mb-3">
                {item.caption}
              </p>
              <div className="px-3 py-1 rounded-full bg-white/90 border border-[#F8CAD5] text-[11px] font-mono text-[#9B1B48]">
                public/images/{item.filename}
              </div>
            </div>

            {/* Real photo overlay */}
            {!hasError && (
              <div
                className={`absolute inset-4 transition-opacity duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  onLoad={() => setIsLoaded(true)}
                  onError={() => setHasError(true)}
                />
              </div>
            )}

            {/* Navigation buttons */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#701133] shadow-md transition-all z-20"
              title="Ảnh trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#701133] shadow-md transition-all z-20"
              title="Ảnh sau"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Details / Memory Description */}
          <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FFFDF8]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-[#FCE7EC] text-[11px] font-serif font-semibold text-[#9B1B48]">
                  {item.year}
                </span>
                <span className="text-xs font-serif text-[#A66378]">
                  Ảnh {currentIndex + 1} / {items.length}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#701133] mb-2">
                {item.title}
              </h3>

              <div className="w-12 h-0.5 bg-[#F8CAD5] mb-4" />

              <p className="font-serif text-sm sm:text-base text-[#5D4650] leading-relaxed mb-6">
                &ldquo;{item.caption}&rdquo;
              </p>

              {item.location && (
                <p className="text-xs text-[#A66378] font-serif flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
                  <span>{item.location}</span>
                </p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#F8CAD5]/50 flex items-center justify-between">
              <span className="font-handwriting text-xl text-[#9B1B48]">
                Vy Kha • Tuổi 22
              </span>
              <div className="flex items-center gap-1 text-[#9B1B48]">
                <Heart className="w-4 h-4 fill-[#F8CAD5]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
