export interface LoveLetterContent {
  sender: string;
  recipient: string;
  date: string;
  title: string;
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  postScript: string;
}

export const LOVE_LETTER_DATA: LoveLetterContent = {
  sender: "Em – Người luôn yêu thương và bên cạnh anh",
  recipient: "Anh Vy Kha",
  date: "31 tháng 10 năm 2026",
  title: "Gửi Anh Vy Kha – Bức Thư Dành Cho Chàng Trai Tuổi 22 Của Em",
  salutation: "Gửi anh Vy Kha thân yêu của em,",
  paragraphs: [
    "Hôm nay là ngày 31 tháng 10 năm 2026 – một ngày thật đặc biệt, ngày mà 22 năm trước thế giới này đã đón chào một cậu bé ấm áp, thông minh và tốt bụng mang tên Vy Kha.",
    "Bước sang tuổi 22, em nhìn thấy ở anh một người đàn ông ngày càng trưởng thành, chín chắn, luôn có trách nhiệm và đầy nhiệt huyết với những dự định của mình. Em luôn cảm thấy thật may mắn và hạnh phúc khi có anh đồng hành, được nhìn thấy nụ cười hiền hậu, ánh mắt kiên định và sự quan tâm chu đáo mà anh luôn dành cho em mỗi ngày.",
    "Ở tuổi 22, em chúc anh Vy Kha sẽ luôn có thật nhiều sức khỏe, giữ vững bản lĩnh và sự tự tin trên con đường sự nghiệp và học tập mà anh đã chọn. Mong rằng mọi nỗ lực và cố gắng của anh đều sẽ được đền đáp xứng đáng bằng những thành quả rực rỡ nhất.",
    "Dù ngoài kia cuộc sống có bận rộn, áp lực hay đôi khi có những ngày mệt mỏi, anh hãy luôn nhớ rằng: phía sau anh luôn có em, sẵn sàng lắng nghe, thấu hiểu, sẻ chia và làm hậu phương dịu dàng, vững chắc nhất cho anh. Em luôn tin tưởng và tự hào về anh.",
    "Chúc mừng sinh nhật tuổi 22 của chàng trai tuyệt vời nhất trong lòng em! Cảm ơn anh vì đã đến bên em và cho em cảm nhận được tình yêu thương bình yên đến thế."
  ],
  closing: "Yêu thương và thương anh thật nhiều,",
  signature: "Em của anh ❤️",
  postScript: "P.S: Em có chuẩn bị một chiếc hộp quà bí mật ở ngay bên dưới, anh nhớ mở ra nhận đặc quyền nhé! ✨"
};
