import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Metadata } from "next";
import { JSX } from "react";

// Import the custom components mapping
import { mdxComponents } from "@/components/mdx-layout";

// --- Types ---
interface PageProps {
  params: Promise<{ slug: string }>;
}

interface MdxModule {
  default: (props: { components: MdxComponentsType }) => JSX.Element;
  frontmatter?: MdxFrontmatter;
  metadata?: MdxFrontmatter;
}

interface MdxFrontmatter {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
}

// Define the type for MDX components
export type MdxComponentsType = typeof mdxComponents;

// --- Static Param Generation ---
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const contentDir = path.join(process.cwd(), "app/blogs/content");
  try {
    const filenames = await fs.readdir(contentDir);
    const mdxFiles = filenames.filter((filename) => filename.endsWith(".mdx"));

    return mdxFiles.map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
    }));
  } catch (error) {
    console.warn(
      "Could not read content directory for generateStaticParams:",
      error,
    );
    return [];
  }
}

// --- Dynamic Metadata Generation (for SEO) ---
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    // Dynamically import the MDX module to access its frontmatter/metadata
    const MdxModule: MdxModule = await import(`../content/${slug}.mdx`);
    const frontmatter = MdxModule.frontmatter || MdxModule.metadata || {};

    return {
      title: frontmatter.title ?? "Blog Post",
      description: frontmatter.description ?? "An interesting blog post.",
      keywords: frontmatter.tags?.join(", ") || "",
      openGraph: {
        title: frontmatter.title ?? "Blog Post",
        description: frontmatter.description ?? "An interesting blog post.",
        type: "article",
      },
    };
  } catch (error) {
    console.error(`Error generating metadata for slug "${slug}":`, error);
    return {
      title: "Blog Post Not Found",
      description: "This blog post could not be loaded.",
    };
  }
}

// --- Page Component (Server Component) ---
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    // Dynamically import the MDX module
    const MdxModule: MdxModule = await import(`../content/${slug}.mdx`);
    const MDXContent = MdxModule.default; // The actual React component

    // Get frontmatter data - allow for both frontmatter and metadata property names
    const frontmatter = MdxModule.frontmatter || MdxModule.metadata || {};

    // Format the date if it exists
    const postDate = frontmatter.date
      ? new Date(frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

    return (
      <article className="prose prose-lg dark:prose-invert max-w-5xl mx-auto px-4 py-8">
        {/* Only display frontmatter elements when they exist */}
        <header className="mb-8">
          {frontmatter.title && (
            <h1 className="text-3xl font-bold !mb-2">{frontmatter.title}</h1>
          )}

          {postDate && (
            <p className="text-gray-500 dark:text-gray-400 mt-0 text-sm">
              Published on {postDate}
            </p>
          )}

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <hr className="my-6 dark:border-gray-700" />

        <Suspense
          fallback={
            <div className="text-center py-10">Loading post content...</div>
          }
        >
          {/* Pass the mdxComponents to the MDX content */}
          <MDXContent components={mdxComponents} />
        </Suspense>
      </article>
    );
  } catch (error) {
    // Log the specific error for debugging
    console.error(
      `Error loading MDX component or module for slug "${slug}":`,
      error,
    );

    // Check if the error is because the module wasn't found
    if ((error as { code?: string }).code === "MODULE_NOT_FOUND") {
      console.error(`MDX File not found: app/blogs/content/${slug}.mdx`);
    }

    // If the import fails, render the 404 page
    notFound();
  }
}
