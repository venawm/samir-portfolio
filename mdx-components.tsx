// mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "./components/mdx-layout"; // Adjust path as needed

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
