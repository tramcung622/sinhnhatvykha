export interface VoucherItem {
  id: string;
  code: string;
  title: string;
  description: string;
  perk: string;
  expiry: string;
  iconName: string;
  colorTheme: string;
}

export const VOUCHERS_DATA: VoucherItem[] = [
  {
    id: "voucher-1",
    code: "VYKHA-MASSAGE-HUG",
    title: "Vé Massage, Ôm Thật Chặt & Lắng Nghe",
    description: "Bất cứ lúc nào anh cảm thấy mệt mỏi sau một ngày làm việc hay cần tâm sự, em luôn sẵn sàng lắng nghe và xoa dịu mọi âu lo cho anh.",
    perk: "Hiệu lực 24/7 • Không giới hạn lượt dùng",
    expiry: "Có giá trị trọn đời",
    iconName: "HeartHandshake",
    colorTheme: "from-[#FCE7EC] to-[#F8CAD5]",
  },
  {
    id: "voucher-2",
    code: "VYKHA-KING-FOR-A-DAY",
    title: "Một Ngày Chiều Chuộng Theo Ý Anh",
    description: "Anh là vua trong ngày hôm nay: anh muốn đi đâu, muốn ăn món gì hoặc chơi game, em sẽ luôn đồng hành và chiều theo ý anh.",
    perk: "Anh Vy Kha toàn quyền quyết định • Không càm ràm",
    expiry: "Bất cứ khi nào anh muốn đổi",
    iconName: "UtensilsCrossed",
    colorTheme: "from-[#FFF2E2] to-[#FAD4C0]",
  },
  {
    id: "voucher-3",
    code: "VYKHA-FORGIVE-FREE",
    title: "Vé Miễn Trừ Mọi Cơn Giận Hờn",
    description: "Những lúc em vô cớ hờn dỗi hay giận vu vơ, anh chỉ cần xuất trình tấm vé này là em sẽ tự động bật cười và làm hòa ngay lập tức!",
    perk: "Được đổi ngay lập tức • Xóa bỏ mọi giận dỗi",
    expiry: "Vĩnh viễn không hết hạn",
    iconName: "Sparkles",
    colorTheme: "from-[#F0E6FF] to-[#E2D4F0]",
  },
];
