import React from "react";

interface WashiTapeProps {
  color?: "pink" | "gold" | "cream";
  className?: string;
  angle?: number;
}

export default function WashiTape({
  color = "pink",
  className = "",
  angle = 0,
}: WashiTapeProps) {
  const colorStyles = {
    pink: "bg-[#F8CAD5]/80 text-[#9B1B48] border-y border-[#F4A5B9]/60",
    gold: "bg-[#E5AC99]/80 text-[#701133] border-y border-[#CFA06E]/60",
    cream: "bg-[#F3E9DA]/90 text-[#6A1030] border-y border-[#D6C2AA]/60",
  };

  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`h-4 sm:h-5 w-24 sm:w-28 shadow-sm backdrop-blur-[1px] relative flex items-center justify-center select-none ${colorStyles[color]} ${className}`}
    >
      {/* Torn jagged left edge */}
      <div className="absolute -left-1 top-0 bottom-0 w-2 border-r border-dotted border-white/60 pointer-events-none" />
      {/* Torn jagged right edge */}
      <div className="absolute -right-1 top-0 bottom-0 w-2 border-l border-dotted border-white/60 pointer-events-none" />
      {/* Subtle texture line */}
      <div className="w-full h-px bg-white/40" />
    </div>
  );
}

