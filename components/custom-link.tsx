// components/CustomLink.tsx
import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  ...props
}) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default CustomLink;
