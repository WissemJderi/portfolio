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
  title: "Wissem Jderi — Backend Developer",
  description:
    "Self-taught backend developer in Tunisia. Node.js, TypeScript, NestJS and PostgreSQL, with a web security practice behind it. Open to remote roles.",
  keywords: [
    "Wissem Jderi",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "NestJS",
    "Express",
    "PostgreSQL",
    "REST API",
    "Web Application Security",
    "Remote Developer",
    "Tunisia",
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
    title: "Wissem Jderi — Backend Developer",
    description:
      "Self-taught backend developer in Tunisia. Node.js, TypeScript, NestJS and PostgreSQL, with a web security practice behind it. Open to remote roles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wissem Jderi — Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wissem Jderi — Backend Developer",
    description:
      "Self-taught backend developer in Tunisia. Node.js, TypeScript, NestJS and PostgreSQL, with a web security practice behind it. Open to remote roles.",
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
