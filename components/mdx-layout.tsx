// components/mdx-layout.tsx
import Image from "next/image";
import React from "react";

interface CalloutProps {
  type?: "info" | "warning" | "error" | "tip";
  children: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ type = "info", children }) => {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200",
    error:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200",
    tip: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800 dark:text-green-200",
  };

  return (
    <div className={`p-4 border-l-4 rounded-r mb-6 ${styles[type]}`}>
      {children}
    </div>
  );
};

export const mdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold mt-8 mb-3" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="my-4" {...props} />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a
      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
      {...props}
    />
  ),
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto my-6 font-mono text-sm"
      {...props}
    />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-disc pl-6 my-4" {...props} />
  ),
  ol: (props: React.HTMLProps<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 my-4" {...{ ...props, type: undefined }} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="mb-1" {...props} />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 my-6 italic"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
    // Use Next.js Image when possible, fallback to regular img for external URLs
    props.src?.startsWith("/") ? (
      <Image
        src={props.src}
        alt={props.alt || ""}
        width={700}
        height={350}
        className="rounded-lg my-6"
      />
    ) : (
      <img className="rounded-lg my-6 max-w-full h-auto" {...props} />
    ),
  Callout,
};

// Type for MDX Components should be defined in the correct file to avoid circular dependencies
export type MdxComponentsType = typeof mdxComponents;
