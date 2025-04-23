import { type Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export const generateMetadata = ({
  title,
  description,
  path,
  image,
}: SEOProps): Metadata => {
  const url = `https://yourdomain.com${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
};
