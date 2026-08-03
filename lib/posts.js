import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return { ...getPostData(slug), slug };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    content,
    readTime: getReadTime(content),
  };
}

export function getReadTime(content) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 150));
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
