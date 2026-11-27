// Static export has no image optimizer, so serve files as-is and
// prefix local paths with the base path used on GitHub Pages.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (!src.startsWith("/")) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
