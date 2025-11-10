// const withMDX = require("@next/mdx")();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
//   // Optionally, add any other Next.js config below

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cms.adapundi.com",
//         port: "",
//         pathname: "/uploads/**", // Izinkan semua path di dalam /uploads
//       },
//     ],
//   },
// };

// module.exports = withMDX(nextConfig);


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.adapundi.com",
        port: "",
        pathname: "/uploads/**", // Izinkan semua path di dalam /uploads
      },
    ],
  },
};

module.exports = nextConfig;
