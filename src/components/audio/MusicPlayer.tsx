"use client";

import React, { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";
import { BIRTHDAY_CONFIG } from "@/data/config";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [useSynth, setUseSynth] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play romantic music-box melody via Web Audio API if no MP3 file found
  const playWebAudioChime = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Romantic music box notes (Happy Birthday / Lullaby frequencies)
      const notes = [
        261.63, 261.63, 293.66, 261.63, 349.23, 329.63, // C4 C4 D4 C4 F4 E4
        261.63, 261.63, 293.66, 261.63, 392.00, 349.23, // C4 C4 D4 C4 G4 F4
        261.63, 261.63, 523.25, 440.00, 349.23, 329.63, 293.66, // C4 C4 C5 A4 F4 E4 D4
        466.16, 466.16, 440.00, 349.23, 392.00, 349.23  // Bb4 Bb4 A4 F4 G4 F4
      ];
      let noteIndex = 0;

      const playNextNote = () => {
        if (!audioCtxRef.current) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], now);

        // Music box envelope
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.95);

        noteIndex++;
        synthTimerRef.current = setTimeout(playNextNote, 550);
      };

      playNextNote();
    } catch {
      // AudioContext not supported or restricted
    }
  };

  const stopWebAudioChime = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const togglePlay = async () => {
    setHasPrompted(true);

    if (isPlaying) {
      if (audioRef.current && !useSynth) {
        audioRef.current.pause();
      }
      stopWebAudioChime();
      setIsPlaying(false);
    } else {
      if (audioRef.current && !useSynth) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch {
          // If mp3 fails or file does not exist, switch to Web Audio chime
          setUseSynth(true);
          playWebAudioChime();
          setIsPlaying(true);
        }
      } else {
        playWebAudioChime();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      stopWebAudioChime();
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={BIRTHDAY_CONFIG.music.audioSrc}
        loop
        preload="none"
        onError={() => {
          setUseSynth(true);
        }}
      />

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        {/* First time gentle tooltip reminder */}
        {!hasPrompted && !isPlaying && (
          <div className="mb-2 mr-1 px-3 py-1.5 rounded-full bg-[#FFFDF8]/95 border border-[#F8CAD5] shadow-md text-xs font-serif text-[#701133] animate-bounce flex items-center gap-1.5 select-none backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
            <span>Bật nhạc sinh nhật Vy Kha 🎵</span>
          </div>
        )}

        {/* Music Player Bar */}
        <div
          onClick={togglePlay}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && togglePlay()}
          className="group relative flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FFFDF8]/90 hover:bg-[#FFFDF8] border border-[#F8CAD5]/80 shadow-[0_4px_20px_rgba(155,27,72,0.12)] hover:shadow-[0_6px_25px_rgba(155,27,72,0.2)] backdrop-blur-md cursor-pointer transition-all duration-300"
          title={isPlaying ? "Tạm dừng nhạc" : "Bật nhạc nền chúc mừng sinh nhật"}
        >
          {/* Rotating vinyl icon or pulsing play button */}
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-500 ${
              isPlaying
                ? "bg-gradient-to-tr from-[#9B1B48] to-[#B83A5D] text-white animate-[spin_4s_linear_infinite]"
                : "bg-[#FCE7EC] text-[#9B1B48] group-hover:scale-105"
            }`}
          >
            {isPlaying ? (
              <Music className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5 fill-current" />
            )}
          </div>

          {/* Song info and equalizer */}
          <div className="flex flex-col pr-1 select-none text-left">
            <span className="text-xs font-semibold text-[#701133] flex items-center gap-1">
              {BIRTHDAY_CONFIG.music.title}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#A66378] font-serif">
                {isPlaying ? (useSynth ? "Giai điệu Music-box" : "Đang phát...") : "Nhấn để bật nhạc"}
              </span>

              {/* Animated Equalizer Waves */}
              {isPlaying && (
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-[#9B1B48] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2" />
                  <span className="w-0.5 bg-[#CFA06E] rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s] h-3" />
                  <span className="w-0.5 bg-[#9B1B48] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s] h-1.5" />
                  <span className="w-0.5 bg-[#E87293] rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.1s] h-2.5" />
                </div>
              )}
            </div>
          </div>

          {/* Quick controls */}
          <div className="flex items-center gap-1 pl-1 border-l border-[#F8CAD5]/50">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-[#701133] hover:text-[#9B1B48]" />
            ) : (
              <Play className="w-4 h-4 text-[#701133] hover:text-[#9B1B48]" />
            )}
            <button
              type="button"
              onClick={toggleMute}
              className="p-1 text-[#A66378] hover:text-[#9B1B48] transition-colors"
              title={isMuted ? "Bật tiếng" : "Tắt tiếng"}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

