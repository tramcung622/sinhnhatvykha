export interface TimelineItem {
  year: string;
  exactDate?: string;
  age: string;
  title: string;
  description: string;
  iconName: "Baby" | "Sparkles" | "GraduationCap" | "Heart" | "Stars" | "Crown";
  tag: string;
}

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2004",
    exactDate: "31.10.2004",
    age: "0 tuổi",
    title: "Chàng trai nhỏ cất tiếng khóc chào đời",
    description: "Vào một ngày cuối thu dịu mát năm 2004, thế giới đón chào một bé trai khôi ngô, đáng yêu mang tên Vy Kha. Đó là khởi đầu của biết bao niềm vui, niềm tự hào và tình yêu thương.",
    iconName: "Baby",
    tag: "Khởi đầu tuyệt vời",
  },
  {
    year: "2010",
    age: "6 tuổi",
    title: "Những bước chân đầu tiên đến trường",
    description: "Cậu bé Vy Kha với đôi mắt sáng ngời, nụ cười tinh nghịch bắt đầu cắp sách vào lớp một. Mỗi ngày trôi qua là một bài học mới, lớn lên khỏe mạnh và ngoan ngoãn.",
    iconName: "Sparkles",
    tag: "Tuổi thơ rộn rã",
  },
  {
    year: "2016",
    age: "12 tuổi",
    title: "Thời niên thiếu đầy nhiệt huyết",
    description: "Những năm tháng học trò năng động, đầy ắp tiếng cười cùng thầy cô và bạn bè. Vy Kha ngày càng bộc lộ sự thông minh, chân thành và tinh thần trượng nghĩa.",
    iconName: "Heart",
    tag: "Kỷ niệm tuổi học trò",
  },
  {
    year: "2022",
    exactDate: "31.10.2022",
    age: "18 tuổi",
    title: "Chạm ngõ tuổi 18 – Trưởng thành & Bản lĩnh",
    description: "Cột mốc đánh dấu bước chuyển mình quan trọng của cuộc đời. Một Vy Kha 18 tuổi đầy hoài bão, tự lập, bắt đầu tự tin sải cánh vào giảng đường và những mục tiêu lớn hơn.",
    iconName: "GraduationCap",
    tag: "Thanh xuân nhiệt huyết",
  },
  {
    year: "2024",
    exactDate: "31.10.2024",
    age: "20 tuổi",
    title: "Tuổi 20 phong độ & Vững vàng",
    description: "Tròn 20 tuổi – chàng trai ngày càng chín chắn, biết chăm lo cho gia đình, luôn nỗ lực không ngừng và mang lại nguồn năng lượng ấm áp, tin cậy cho những người bên cạnh.",
    iconName: "Stars",
    tag: "Phong độ & Vững chãi",
  },
  {
    year: "2026",
    exactDate: "31.10.2026",
    age: "22 tuổi",
    title: "Cột mốc tuổi 22 rực rỡ hôm nay",
    description: "Chính thức bước sang tuổi 22! Chúc cho chàng trai của em luôn giữ vững phong độ, sự nghiệp rộng mở, gặt hái mọi thành công và luôn cảm nhận được tình yêu thương từ em mỗi ngày.",
    iconName: "Crown",
    tag: "Hôm nay là của anh!",
  },
];
