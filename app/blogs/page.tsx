import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import React from "react"; // Import React if not implicitly available

// Define the structure for a Post
interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
}

// Helper function to extract export const statements from MDX content
// (Keep this function as it is)
function extractExportStatements(content: string): Record<string, string> {
  const exportData: Record<string, string> = {};
  // Improved Regex to handle various quote types and spacing, capture only the value
  const exportRegex =
    /export\s+const\s+([a-zA-Z0-9_]+)\s*=\s*(["'])(.*?)\2\s*;/g;
  let match;

  while ((match = exportRegex.exec(content)) !== null) {
    // match[1] is the key (variable name), match[3] is the value
    if (match[1] && match[3] !== undefined) {
      exportData[match[1]] = match[3];
    }
  }
  return exportData;
}

// Helper function to fetch and process all posts
async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), "app/blogs/content"); // Ensure this path is correct
  let filenames: string[] = [];

  try {
    filenames = fs.readdirSync(postsDir);
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return []; // Return empty array if directory doesn't exist or isn't readable
  }

  const posts: Post[] = filenames
    .filter((filename) => /\.mdx?$/.test(filename)) // Filter for .md or .mdx files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      let fileContents = "";
      try {
        fileContents = fs.readFileSync(filePath, "utf8");
      } catch (error) {
        console.error(`Error reading file ${filename}:`, error);
        return null; // Skip this file if reading fails
      }

      try {
        // Extract data from frontmatter
        const { data: frontmatterData, content } = matter(fileContents);

        // Extract data from export statements within the content
        const exportData = extractExportStatements(content); // Pass content, not the whole fileContents

        // Combine data, prioritizing frontmatter
        const combinedData = {
          ...exportData, // Exports provide defaults
          ...frontmatterData, // Frontmatter overrides exports
        };

        return {
          slug: filename.replace(/\.mdx?$/, ""), // Handle both .md and .mdx
          title: combinedData.title || "Untitled Post",
          date: combinedData.date || new Date().toISOString().split("T")[0],
          description: combinedData.description || "No description provided.",
        };
      } catch (error) {
        console.error(
          `Error processing frontmatter or exports for ${filename}:`,
          error,
        );
        return null; // Skip this file if parsing fails
      }
    })
    .filter(
      (post): post is Post => post !== null && !!post.title && !!post.date,
    ); // Filter out nulls and posts missing required data

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Format date to be more readable (Keep as is)
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    // Add error handling for invalid dates
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  } catch (error) {
    console.error("Error formatting date:", dateString, error);
    return "Invalid Date";
  }
}

// --- App Router Page Component ---

// Set revalidation interval for this page (e.g., every hour)
// This replaces the revalidate option from getStaticProps
export const revalidate = 3600;

// The BlogPage component is now an async Server Component
export default async function BlogPage() {
  // Fetch posts directly within the component
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-16 text-gray-900 dark:text-gray-100 bg-white dark:bg-zinc-950 min-h-screen">
      {/* Added max-w-3xl for better readability on wide screens */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight mb-12 text-black dark:text-white">
          {" "}
          {/* Slightly larger title */}
          Journal
        </h1>

        {posts.length > 0 ? (
          <div className="space-y-12">
            {posts.map((post) => (
              <article // Use article tag for semantic structure
                key={post.slug}
                className="border-t border-gray-200 dark:border-zinc-800 pt-8 first:border-t-0" // Remove top border for the first item
              >
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>{" "}
                  {/* Use time tag */}
                </div>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="block mb-3 group" // Added group for potential hover effects
                >
                  <h2 className="text-2xl font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">
                    {" "}
                    {/* Larger heading, hover effect */}
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
                  {" "}
                  {/* Added margin bottom */}
                  {post.description}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-block text-sm text-primary dark:text-primary font-medium hover:underline underline-offset-4" // Use primary color, underline offset
                >
                  Read article &rarr; {/* Added arrow */}
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-8 border-t border-gray-200 dark:border-gray-800 mt-8">
            <p className="text-gray-600 dark:text-gray-400">
              No entries found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
