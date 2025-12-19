import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Wissem Jderi - Full-Stack Web Developer",
  description:
    "Wissem Jderi - Full-stack developer building modern, efficient web applications. Skilled in JavaScript, React, Node.js, and passionate about clean, maintainable code.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
