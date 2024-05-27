/** @type {import('next').NextConfig} */
const nextConfig = {};

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

export default nextConfig;
