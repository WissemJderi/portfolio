import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostData, formatDate } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  let post;
  try {
    post = getPostData(slug);
  } catch {
    return {};
  }
  return {
    title: `${post.title} — Wissem Jderi`,
    description: post.excerpt,
  };
};

export default async function PostPage({ params }) {
  const { slug } = await params;

  let post;
  try {
    post = getPostData(slug);
  } catch {
    notFound();
  }
  if (!post) notFound();

  return (
    <article>
      <Link
        href="/blog"
        className="font-mono text-sm text-gray-400 transition-colors hover:text-[#ddddc3]"
      >
        ← Back to blog
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-white">{post.title}</h1>
      <p className="mt-3 font-mono text-sm text-gray-500">
        [{formatDate(post.date)}] · {post.readTime} min read
      </p>

      <div className="mt-10 max-w-none prose prose-invert prose-headings:text-white prose-a:text-[#ddddc3] prose-a:no-underline prose-a:hover:underline prose-strong:text-white prose-blockquote:border-[#ddddc3]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6">
        <Link
          href="/blog"
          className="font-mono text-sm text-gray-400 transition-colors hover:text-[#ddddc3]"
        >
          ← All posts
        </Link>
      </div>
    </article>
  );
}
