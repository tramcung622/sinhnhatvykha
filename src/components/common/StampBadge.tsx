import React from "react";
import { Sparkles, Heart } from "lucide-react";

interface StampBadgeProps {
  label?: string;
  sublabel?: string;
  className?: string;
}

export default function StampBadge({
  label = "VY KHA • 31.10",
  sublabel = "TUỔI 22",
  className = "",
}: StampBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-dashed border-[#B83A5D]/40 bg-[#FFFDF8] shadow-sm text-xs font-serif text-[#701133] select-none ${className}`}
    >
      <Heart className="w-3.5 h-3.5 text-[#9B1B48] fill-[#F8CAD5]" />
      <span className="font-semibold tracking-wider uppercase">{label}</span>
      <span className="text-[#CFA06E]">•</span>
      <span className="font-handwriting text-sm text-[#9B1B48]">{sublabel}</span>
      <Sparkles className="w-3 h-3 text-[#CFA06E]" />
    </div>
  );
}

