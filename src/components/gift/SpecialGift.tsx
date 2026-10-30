"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  Sparkles,
  Heart,
  CheckCircle,
  HeartHandshake,
  UtensilsCrossed,
  RotateCcw,
} from "lucide-react";
import { VOUCHERS_DATA, VoucherItem } from "@/data/vouchers";
import WashiTape from "@/components/common/WashiTape";
import { triggerBirthdayConfetti, triggerFireworks } from "@/utils/confetti";

export default function SpecialGift() {
  const [isOpened, setIsOpened] = useState(false);
  const [redeemedVouchers, setRedeemedVouchers] = useState<string[]>([]);

  const handleOpenGift = () => {
    if (!isOpened) {
      setIsOpened(true);
      triggerBirthdayConfetti();
      triggerFireworks(3500);
    }
  };

  const handleRedeem = (id: string) => {
    if (!redeemedVouchers.includes(id)) {
      setRedeemedVouchers([...redeemedVouchers, id]);
      triggerBirthdayConfetti();
    }
  };

  const getVoucherIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return HeartHandshake;
      case "UtensilsCrossed":
        return UtensilsCrossed;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="special-gift" className="py-20 px-4 relative overflow-hidden bg-[#FAF4EB]/70">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#FCE7EC]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F8CAD5]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 inline-block"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] border border-[#F8CAD5] text-xs font-serif text-[#9B1B48] uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5 text-[#CFA06E]" />
            <span>Món Quà Bất Ngờ Tuổi 22</span>
            <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#701133] mb-3">
            Hộp Quà Bí Mật Dành Cho Vy Kha
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#5D4650] font-serif leading-relaxed">
            Hãy chạm vào hộp quà để mở chiếc rương chứa đựng những bất ngờ ngọt ngào nhất đã được chuẩn bị riêng cho em.
          </p>
        </motion.div>

        {/* 3D Gift Box Interactive Area */}
        <div className="relative py-6 flex flex-col items-center">
          {!isOpened ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative cursor-pointer group"
              onClick={handleOpenGift}
            >
              {/* Floating Heart / Sparkle Indicator */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#F8CAD5] text-xs font-serif text-[#9B1B48] shadow-md flex items-center gap-1 select-none animate-bounce">
                <Sparkles className="w-3.5 h-3.5 text-[#CFA06E]" />
                <span>Bấm để mở quà 🎁</span>
              </div>

              {/* 3D Gift Box Visual */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 relative perspective-1000">
                {/* Gift Box Lid */}
                <motion.div
                  whileHover={{ y: -8, rotateZ: 2 }}
                  className="w-full h-20 bg-gradient-to-r from-[#9B1B48] via-[#B83A5D] to-[#9B1B48] rounded-t-2xl shadow-xl relative z-20 flex items-center justify-center border-b-2 border-white/20"
                >
                  {/* Ribbon Bow */}
                  <div className="absolute -top-6 w-14 h-14 rounded-full bg-[#CFA06E] border-2 border-white shadow-md flex items-center justify-center text-white">
                    <Heart className="w-7 h-7 fill-white" />
                  </div>
                  {/* Horizontal ribbon on lid */}
                  <div className="w-full h-4 bg-[#CFA06E]/90 absolute top-1/2 -translate-y-1/2" />
                  {/* Vertical ribbon on lid */}
                  <div className="w-5 h-full bg-[#CFA06E]/90 absolute left-1/2 -translate-x-1/2" />
                </motion.div>

                {/* Gift Box Body */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#701133] via-[#9B1B48] to-[#540B26] rounded-b-2xl shadow-2xl relative flex flex-col items-center justify-center text-white p-6 border-t-2 border-black/10"
                >
                  {/* Vertical ribbon on body */}
                  <div className="w-5 h-full bg-[#CFA06E]/90 absolute left-1/2 -translate-x-1/2 top-0" />

                  {/* Gift Tag Card */}
                  <div className="relative z-10 bg-white/95 rounded-lg p-3 shadow-md border border-[#F8CAD5] text-center transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <p className="font-serif text-[10px] text-[#A66378] uppercase tracking-wider">
                      Đặc biệt trao tặng
                    </p>
                    <p className="font-handwriting text-2xl text-[#701133] font-bold">
                      Vy Kha
                    </p>
                    <p className="font-serif text-[10px] text-[#9B1B48]">
                      Sinh nhật 22 tuổi • 31.10.2026
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Open Button */}
              <div className="mt-8">
                <button
                  type="button"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9B1B48] to-[#B83A5D] text-white text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <Gift className="w-5 h-5" />
                  <span>Mở Hộp Quà Sinh Nhật</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* Opened Gift Content: Vouchers & Celebration */
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-3xl text-left"
              >
                {/* Success Banner */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE7EC] text-xs font-serif text-[#9B1B48] mb-2">
                    <Sparkles className="w-4 h-4 text-[#CFA06E]" />
                    <span>Hộp quà đã được mở thành công!</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#701133]">
                    3 Tấm Vé Yêu Thương Dành Riêng Cho Anh Vy Kha
                  </h3>
                  <p className="font-handwriting text-xl text-[#9B1B48] mt-1">
                    Mỗi tấm vé là một lời hứa và đặc quyền có giá trị trọn đời!
                  </p>
                </div>

                {/* Voucher Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {VOUCHERS_DATA.map((voucher: VoucherItem) => {
                    const IconComponent = getVoucherIcon(voucher.iconName);
                    const isRedeemed = redeemedVouchers.includes(voucher.id);

                    return (
                      <div
                        key={voucher.id}
                        className={`scrapbook-paper rounded-2xl p-5 border relative flex flex-col justify-between transition-all duration-300 ${
                          isRedeemed
                            ? "border-green-300 bg-green-50/40 opacity-80"
                            : "border-[#F8CAD5] hover:shadow-lg hover:-translate-y-1"
                        }`}
                      >
                        <WashiTape
                          color="pink"
                          angle={-2}
                          className="absolute -top-2.5 right-4 z-10"
                        />

                        <div>
                          {/* Code & Expiry */}
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#A66378] mb-3">
                            <span>{voucher.code}</span>
                            <span>{voucher.expiry}</span>
                          </div>

                          {/* Icon & Title */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#9B1B48] to-[#B83A5D] text-white">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <h4 className="font-serif font-bold text-base text-[#701133] leading-snug">
                              {voucher.title}
                            </h4>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-[#5D4650] font-serif leading-relaxed mb-4">
                            {voucher.description}
                          </p>
                        </div>

                        {/* Perk & Action */}
                        <div className="pt-3 border-t border-[#F8CAD5]/50">
                          <p className="text-[11px] font-serif italic text-[#9B1B48] mb-3">
                            ✦ {voucher.perk}
                          </p>

                          <button
                            type="button"
                            onClick={() => handleRedeem(voucher.id)}
                            disabled={isRedeemed}
                            className={`w-full py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                              isRedeemed
                                ? "bg-green-100 text-green-700 cursor-default"
                                : "bg-gradient-to-r from-[#9B1B48] to-[#B83A5D] text-white hover:shadow-md"
                            }`}
                          >
                            {isRedeemed ? (
                              <>
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>Đã Kích Hoạt Quyền Lợi!</span>
                              </>
                            ) : (
                              <>
                                <Heart className="w-3.5 h-3.5 fill-white" />
                                <span>Kích Hoạt Vé Ngay</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Reset / Close Gift Option */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpened(false);
                      setRedeemedVouchers([]);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-xs font-serif text-[#701133] border border-[#F8CAD5] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Đóng hộp quà để mở lại lần nữa</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}

