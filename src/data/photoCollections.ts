export type PhotoOrientation = "landscape" | "portrait" | "square";

export type PhotoItem = {
  src: string;
  alt: string;
  orientation: PhotoOrientation;
};

export type PhotoCollection = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  photos: PhotoItem[];
};

export const photoCollections: PhotoCollection[] = [
  {
    slug: "laboratorio",
    title: "Laboratorio",
    description: "Strumenti, dettagli tecnici e ambiente di lavoro.",
    cover: "/images/foto/laboratorio/lab1.jpg",
    photos: [
      {
        src: "/images/foto/laboratorio/lab1.jpg",
        alt: "Laboratorio 1",
        orientation: "landscape",
      },
      {
        src: "/images/foto/laboratorio/lab2.jpg",
        alt: "Laboratorio 2",
        orientation: "portrait",
      },
      {
        src: "/images/foto/laboratorio/lab3.jpg",
        alt: "Laboratorio 3",
        orientation: "square",
      },
    ],
  },
  {
    slug: "natura",
    title: "Natura",
    description: "Immagini più visive e ambienti aperti.",
    cover: "/images/foto/natura/natura1.jpg",
    photos: [
      {
        src: "/images/foto/natura/natura1.jpg",
        alt: "Natura 1",
        orientation: "landscape",
      },
      {
        src: "/images/foto/natura/natura2.jpg",
        alt: "Natura 2",
        orientation: "portrait",
      },
      {
        src: "/images/foto/natura/natura3.jpg",
        alt: "Natura 3",
        orientation: "landscape",
      },
    ],
  },
  {
    slug: "viaggio",
    title: "Viaggio",
    description: "Una raccolta fotografica più narrativa.",
    cover: "/images/foto/viaggio/viaggio1.jpg",
    photos: [
      {
        src: "/images/foto/viaggio/viaggio1.jpg",
        alt: "Viaggio 1",
        orientation: "portrait",
      },
      {
        src: "/images/foto/viaggio/viaggio2.jpg",
        alt: "Viaggio 2",
        orientation: "landscape",
      },
      {
        src: "/images/foto/viaggio/viaggio3.jpg",
        alt: "Viaggio 3",
        orientation: "square",
      },
    ],
  },
];