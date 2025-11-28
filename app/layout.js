import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wissem Jderi",
  description:
    "Wissem Jderi - Full-stack developer building modern, efficient web applications. Skilled in JavaScript, React, Node.js, and passionate about clean, maintainable code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-playfair antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
