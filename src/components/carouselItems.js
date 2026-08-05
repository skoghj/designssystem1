// src/data/carouselItems.js
//
// Data source for the elliptical photo archive carousel.
// Each entry maps to one point on the ellipse and one state of the
// detail panel. Swap coverImage / galleryImages for real assets later —
// the shape (id, title, subtitle, description, coverImage,
// galleryImages, tags) is all the carousel and detail section expect.

export const carouselItems = [
  {
    id: 1,
    number: "01",
    title: "Origins",
    subtitle: "Seoul · 1990–2010",
    description:
      "The earliest layer of the archive — unlabeled negatives, borrowed cameras, streets photographed before they had names worth remembering.",
    coverImage: "https://picsum.photos/id/1015/900/1200",
    galleryImages: [
      "https://picsum.photos/id/1016/900/1100",
      "https://picsum.photos/id/1018/700/700",
      "https://picsum.photos/id/1019/700/700",
    ],
    tags: ["memory", "place", "identity"],
  },
  {
    id: 2,
    number: "02",
    title: "Transit",
    subtitle: "Copenhagen · 2011–2014",
    description:
      "A period spent mostly in motion — ferries, platforms, waiting rooms. The camera becomes a way of holding still.",
    coverImage: "https://picsum.photos/id/1021/900/1200",
    galleryImages: [
      "https://picsum.photos/id/1024/900/1100",
      "https://picsum.photos/id/1039/700/700",
      "https://picsum.photos/id/1043/700/700",
    ],
    tags: ["motion", "distance", "threshold"],
  },
  {
    id: 3,
    number: "03",
    title: "Fracture",
    subtitle: "Aarhus · 2015",
    description:
      "A year defined by things coming apart on purpose — dismantled sets, half-finished renovations, a studio in pieces.",
    coverImage: "https://picsum.photos/id/1035/900/1200",
    galleryImages: [
      "https://picsum.photos/id/1033/900/1100",
      "https://picsum.photos/id/1036/700/700",
      "https://picsum.photos/id/1037/700/700",
    ],
    tags: ["structure", "collapse", "material"],
  },
  {
    id: 4,
    number: "04",
    title: "Assembly",
    subtitle: "Copenhagen · 2016–2018",
    description:
      "Rebuilding, quite literally — workshops, prototypes, hands mid-gesture. The archive's most crowded chapter.",
    coverImage: "https://picsum.photos/id/1041/900/1200",
    galleryImages: [
      "https://picsum.photos/id/1050/900/1100",
      "https://picsum.photos/id/1055/700/700",
      "https://picsum.photos/id/1060/700/700",
    ],
    tags: ["craft", "process", "hands"],
  },
  {
    id: 5,
    number: "05",
    title: "Drift",
    subtitle: "Malmö · 2019",
    description:
      "Fewer photographs, longer gaps between them. A season of watching rather than making.",
    coverImage: "https://picsum.photos/id/1062/900/1200",
    galleryImages: [
      "https://picsum.photos/id/1067/900/1100",
      "https://picsum.photos/id/1069/700/700",
      "https://picsum.photos/id/1074/700/700",
    ],
    tags: ["stillness", "distance", "pause"],
  },
  {
    id: 6,
    number: "06",
    title: "Threshold",
    subtitle: "Seoul · 2020–2021",
    description:
      "Doorways, windowsills, half-open gates — a year spent photographing the edges between inside and outside.",
    coverImage: "https://picsum.photos/id/1080/900/1200",
    galleryImages: [
      "https://picsum.photos/id/1084/900/1100",
      "https://picsum.photos/id/1082/700/700",
      "https://picsum.photos/id/1074/700/700",
    ],
    tags: ["boundary", "light", "interior"],
  },
  {
    id: 7,
    number: "07",
    title: "Continuum",
    subtitle: "Copenhagen · 2022–2024",
    description:
      "The archive starts talking to itself — new photographs deliberately echoing old ones, patterns instead of single frames.",
    coverImage: "https://picsum.photos/id/1027/900/1200",
    galleryImages: [
      "https://picsum.photos/id/1031/900/1100",
      "https://picsum.photos/id/1040/700/700",
      "https://picsum.photos/id/1044/700/700",
    ],
    tags: ["pattern", "repetition", "system"],
  },
  {
    id: 8,
    number: "08",
    title: "Afterimage",
    subtitle: "Copenhagen · 2025–present",
    description:
      "The most recent, least settled chapter — still being written, still being sorted, held here in its current, unfinished order.",
    coverImage: "https://picsum.photos/id/1052/900/1200",
    galleryImages: [
      "https://picsum.photos/id/1056/900/1100",
      "https://picsum.photos/id/1059/700/700",
      "https://picsum.photos/id/1063/700/700",
    ],
    tags: ["present", "unfinished", "archive"],
  },
];
