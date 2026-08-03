import Main from "@/components/Main";
import Squares from "@/components/Squares";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts()
    .slice(0, 3)
    .map(({ slug, title, date, readTime, excerpt }) => ({
      slug,
      title,
      date: formatDate(date),
      readTime,
      excerpt,
    }));

  return (
    <div>
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
      <Main posts={recentPosts} />
    </div>
  );
}