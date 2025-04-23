import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export interface Frontmatter {
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
  [key: string]: any;
}

export interface PostData {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "app/blogs/content");

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Parse the frontmatter and content
    const { data: frontmatter, content } = matter(fileContent);

    return {
      slug,
      frontmatter: frontmatter as Frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error getting post for slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<PostData[]> {
  try {
    const files = fs.readdirSync(CONTENT_DIR);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = mdxFiles.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(CONTENT_DIR, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug,
        frontmatter: data as Frontmatter,
        content: "", // We don't need content for the listing
      };
    });

    // Sort posts by date (newest first)
    return posts.sort((a, b) => {
      if (!a.frontmatter.date || !b.frontmatter.date) return 0;
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}

export async function serializeMdx(content: string) {
  const mdxSource = await serialize(content, {
    // mdxOptions: {
    //   remarkPlugins: [],
    //   rehypePlugins: [],
    // },
    parseFrontmatter: true,
  });

  return mdxSource;
}
