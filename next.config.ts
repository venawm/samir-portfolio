// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  // Append the default Next.js config here
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
