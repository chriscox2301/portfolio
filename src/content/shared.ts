import type { ContactLink } from "./types";

/** Content that is the same in every language. */
export const repos = {
  klantbestelsysteem: {
    repoUrl: "https://github.com/chriscox2301/KlantBestelSysteem",
    repoLabel: "github.com/chriscox2301/KlantBestelSysteem",
    imageSrc: "/images/klantbestelsysteem.png",
  },
  bezorgapplicatie: {
    repoUrl: "https://github.com/chriscox2301/BezorgersApplicatie",
    repoLabel: "github.com/chriscox2301/BezorgersApplicatie",
    imageSrc: "/images/bezorgapplicatie.png",
    imagePortrait: true,
  },
  adminbackoffice: {
    repoUrl: "https://github.com/chriscox2301/De_Codekloppers",
    repoLabel: "github.com/chriscox2301/De_Codekloppers",
    imageSrc: "/images/adminbackoffice.png",
  },
};

export const contactLinks: ContactLink[] = [
  { label: "chriscox23012005@gmail.com", href: "mailto:chriscox23012005@gmail.com" },
  { label: "+31 6 11 25 98 12", href: "tel:+31611259812", tabularNums: true },
  {
    label: "linkedin.com/in/chris-cox-1b7b2b289",
    href: "https://www.linkedin.com/in/chris-cox-1b7b2b289",
    external: true,
  },
  {
    label: "github.com/chriscox2301",
    href: "https://github.com/chriscox2301",
    external: true,
  },
];
