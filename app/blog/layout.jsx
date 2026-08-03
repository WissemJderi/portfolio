import Link from "next/link";
import Squares from "@/components/Squares";

export const metadata = {
  title: "Blog — Wissem Jderi",
  description:
    "Notes and write-ups on building, learning, and shipping software.",
};

export default function BlogLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#111312]">
      <div className="fixed top-0 left-0 w-screen h-full z-[-1]">
        <div className="absolute inset-0 bg-[#111312]/40"></div>
        <div className="w-full h-full relative">
          <Squares
            speed={0.7}
            squareSize={100}
            direction="down"
            borderColor="#000"
            hoverFillColor="#222"
          />
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111312]/90 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm text-gray-400 transition-colors hover:text-[#ddddc3]"
          >
            ← wissemjderi.dev
          </Link>
          <span className="font-mono text-sm text-[#ddddc3]">/blog</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 pb-20 pt-10">
        {children}
      </main>
    </div>
  );
}
