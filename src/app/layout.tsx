import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-handwriting",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy 22nd Birthday Vy Kha! 💖 | 31.10.2026",
  description: "Trang web chúc mừng sinh nhật tuổi 22 dành riêng cho Vy Kha (31/10/2004 - 31/10/2026). Tuổi 22 rực rỡ, ngọt ngào và hạnh phúc!",
  keywords: ["Vy Kha", "Happy Birthday", "Sinh nhật tuổi 22", "31/10/2004", "31/10/2026"],
  authors: [{ name: "For Vy Kha with Love" }],
  openGraph: {
    title: "Happy 22nd Birthday Vy Kha! 🎂✨",
    description: "Chúc mừng sinh nhật tuổi 22 rực rỡ và đong đầy yêu thương của Vy Kha!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${jakartaSans.variable} ${cormorant.variable} ${dancing.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFDF9] text-[#4A3B43] font-sans antialiased selection:bg-[#F9CBD6] selection:text-[#6A1030] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
