import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <h1 className="text-3xl font-bold tracking-wide text-white">Blog:</h1>
      <p className="mt-2 mb-10 text-gray-400">
        Notes on building, learning, and shipping software.
      </p>

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-10 block rounded-sm border border-white/10 bg-[#1c1c18] p-6 transition-colors hover:border-[#ddddc3]/40"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ddddc3]">
            Latest post
          </span>
          <h2 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-[#ddddc3]">
            {featured.title}
          </h2>
          <p className="mt-2 text-sm text-gray-400">{featured.excerpt}</p>
          <span className="mt-4 block font-mono text-xs text-gray-500">
            [{formatDate(featured.date)}] · {featured.readTime} min read
          </span>
        </Link>
      )}

      <ul>
        {rest.map((post) => (
          <li key={post.slug} className="border-b border-white/10 py-5">
            <Link href={`/blog/${post.slug}`} className="group block">
              <span className="font-mono text-xs text-gray-500">
                [{formatDate(post.date)}] · {post.readTime} min read
              </span>
              <h2 className="mt-1 text-lg font-semibold text-white transition-colors group-hover:text-[#ddddc3]">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-gray-400">{post.excerpt}</p>
              {post.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-[#3a3a35] px-2 py-0.5 font-mono text-[10px] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
