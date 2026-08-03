import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

const SITE_URL = "https://wissemjderi.vercel.app/";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Wissem Jderi - Full-Stack Web Developer",
  description:
    "Wissem Jderi - Full-stack developer building modern, efficient web applications. Skilled in JavaScript, React, Node.js, and passionate about clean, maintainable code.",
  keywords: [
    "Wissem Jderi",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Freelance Developer",
  ],
  authors: [{ name: "Wissem Jderi" }],
  creator: "Wissem Jderi",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Wissem Jderi",
    title: "Wissem Jderi - Full-Stack Web Developer",
    description:
      "Full-stack developer building modern, efficient web applications. Skilled in JavaScript, React, Node.js, and passionate about clean, maintainable code.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wissem Jderi - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wissem Jderi - Full-Stack Web Developer",
    description:
      "Full-stack developer building modern, efficient web applications. Skilled in JavaScript, React, Node.js, and passionate about clean, maintainable code.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.className} antialiased`}>{children}</body>
    </html>
  );
}
