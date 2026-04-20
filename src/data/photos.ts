import type { ImageMetadata } from "astro";

type PhotoOrientation = "landscape" | "portrait" | "square";

type PhotoItem = {
  id: string;
  alt: string;
  image: ImageMetadata;
  width: number;
  height: number;
  orientation: PhotoOrientation;
};

type PhotoCollection = {
  slug: string;
  title: string;
  description: string;
  cover: PhotoItem;
  photos: PhotoItem[];
  count: number;
};

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/foto/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);

function niceTitle(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getOrientation(width: number, height: number): PhotoOrientation {
  const ratio = width / height;
  if (ratio > 1.15) return "landscape";
  if (ratio < 0.85) return "portrait";
  return "square";
}

const grouped = Object.entries(modules).reduce((acc, [path, mod]) => {
  const clean = path.replace("/src/assets/foto/", "");
  const parts = clean.split("/");
  const collectionSlug = parts[0];
  const filename = parts[parts.length - 1];

  if (!acc[collectionSlug]) acc[collectionSlug] = [];

  const image = mod.default;

  acc[collectionSlug].push({
    id: filename.replace(/\.[^.]+$/, ""),
    alt: filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    image,
    width: image.width,
    height: image.height,
    orientation: getOrientation(image.width, image.height),
  });

  return acc;
}, {} as Record<string, PhotoItem[]>);

export const photoCollections: PhotoCollection[] = Object.entries(grouped)
  .map(([slug, photos]) => ({
    slug,
    title: niceTitle(slug),
    description: `Raccolta fotografica: ${niceTitle(slug)}.`,
    cover: photos[0],
    photos,
    count: photos.length,
  }))
  .sort((a, b) => a.title.localeCompare(b.title));