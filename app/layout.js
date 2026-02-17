import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
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
      <body className={`${ibmPlexMono.className} antialiased`}>{children}</body>
    </html>
  );
}
