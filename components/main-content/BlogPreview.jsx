"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BlogPreview = ({ posts, sectionStyle, titleStyle }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div id="Blog" className={sectionStyle}>
      <h2 className={titleStyle}>Latest from the blog:</h2>
      <p className="mb-7">
        Notes on building, learning, and shipping software.
      </p>

      <div className="grid grid-cols-1 gap-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-sm bg-[#3a3a35] p-4 transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="font-mono text-xs text-gray-500">
              [{post.date}] · {post.readTime} min read
            </span>
            <h3 className="mt-1 font-semibold text-white transition-colors group-hover:text-[#ddddc3]">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-gray-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>

      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#ddddc3]"
      >
        View all posts
        <FaArrowRight size={12} />
      </Link>
    </div>
  );
};

export default BlogPreview;