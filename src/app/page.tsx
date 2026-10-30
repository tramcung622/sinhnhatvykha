import FloatingHearts from "@/components/common/FloatingHearts";
import MusicPlayer from "@/components/audio/MusicPlayer";
import HeroSection from "@/components/hero/HeroSection";
import InteractiveCake from "@/components/cake/InteractiveCake";
import CelebrationTuoi22 from "@/components/celebration/CelebrationTuoi22";
import MemoriesGallery from "@/components/memories/MemoriesGallery";
import MemoryTimeline from "@/components/timeline/MemoryTimeline";
import LoveLetter from "@/components/letter/LoveLetter";
import SpecialGift from "@/components/gift/SpecialGift";
import FinalWish from "@/components/final-wish/FinalWish";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[#F8CAD5] selection:text-[#701133]">
      {/* Floating background gentle hearts & petals */}
      <FloatingHearts />

      {/* Floating Music Player (No autoplay, manual toggle) */}
      <MusicPlayer />

      {/* Hero Opening Section */}
      <HeroSection />

      {/* Interactive Birthday Cake with 22 Burning Candles (Click to Blow Out) */}
      <InteractiveCake />

      {/* Birthday Celebration Tuổi 22 */}
      <CelebrationTuoi22 />

      {/* Photo Memories Gallery (35 Polaroids) */}
      <MemoriesGallery />

      {/* Memory Timeline (2004 — 2026) */}
      <MemoryTimeline />

      {/* Birthday Love Letter (Vietnamese - Nữ chúc Nam) */}
      <LoveLetter />

      {/* Special Gift 3D Opening & Romantic Vouchers */}
      <SpecialGift />

      {/* Final Wish & Fireworks */}
      <FinalWish />
    </main>
  );
}
