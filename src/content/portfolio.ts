import type { Contact, Project, SkillGroup, TimelineEntry } from "./types";

export const projects: Project[] = [
  {
    id: "klantbestelsysteem",
    number: "01",
    meta: "HBO-ICT project",
    title: "KlantBestelSysteem",
    description:
      "Ordering system for customers of a fictional mechanical parts website.",
    role: "the full ASP.NET Core MVC application — data model, order flow and the customer-facing screens.",
    stack: ["C#", "ASP.NET Core MVC", "HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/chriscox2301/KlantBestelSysteem",
    repoLabel: "github.com/chriscox2301/KlantBestelSysteem",
    imageSrc: "/images/klantbestelsysteem.png",
    imageAlt: "Screenshot of the KlantBestelSysteem order flow",
  },
  {
    id: "bezorgapplicatie",
    number: "02",
    meta: "HBO-ICT project",
    title: "BezorgApplicatie",
    description: "Mobile application in .NET MAUI for delivery drivers.",
    role: "the app's screens and navigation, plus the delivery data it works from.",
    stack: [".NET MAUI", "C#", "XAML", "Responsive design"],
    repoUrl: "https://github.com/chriscox2301/BezorgersApplicatie",
    repoLabel: "github.com/chriscox2301/BezorgersApplicatie",
    imageSrc: "/images/bezorgapplicatie.png",
    imageAlt: "Screenshot of the BezorgApplicatie mobile app",
  },
  {
    id: "adminbackoffice",
    number: "03",
    meta: "HBO-ICT project",
    title: "AdminBackOffice",
    description: "Web-based admin back-office application",
    role: "the navigation and the flow of the back office.",
    stack: ["C#", "ASP.NET Core MVC"],
    repoUrl: "https://github.com/chriscox2301/De_Codekloppers",
    repoLabel: "github.com/chriscox2301/De_Codekloppers",
    imageSrc: "/images/adminbackoffice.png",
    imageAlt: "Screenshot of the AdminBackOffice back office",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Front-end",
    note: "Where I spend most of my time",
    items: ["HTML", "CSS", "JavaScript", "Responsive design"],
  },
  {
    name: "Back-end",
    note: "From the backend track at Zuyd",
    items: ["C#", "ASP.NET Core MVC", "Python", ".NET MAUI"],
  },
  {
    name: "Working style",
    note: "Habits from study and from leading a team",
    items: [
      "Leadership",
      "Team player",
      "Communicative",
      "Problem solving",
      "Linux",
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "2024 — present",
    title: "HBO-ICT",
    place: "Zuyd Hogeschool, Heerlen",
    text: "Tracks: Backend Development and Interface Development.",
  },
  {
    period: "Feb 2026 — present",
    title: "Stocking team lead",
    place: "Jumbo Supermarkten, Maastricht Mosae Forum",
    text: "Leading and training the stocking team, planning shifts and deliveries, and fixing the bottlenecks that slow a shift down.",
  },
  {
    period: "Jun 2026",
    title: "Emergency response certificate (BHV)",
    place: "Certified",
    text: "First aid, evacuation coordination and fire-fighting technique.",
  },
  {
    period: "2022 — 2023",
    title: "Engineering",
    place: "Zuyd Hogeschool, Heerlen",
    text: "Stopped after the first year; the propedeuse was not completed.",
  },
  {
    period: "Feb 2019 — Oct 2020",
    title: "Shelf stocker",
    place: "Nettorama, Sittard",
    text: "Stocking shelves, checking dates and helping customers find what they came for.",
  },
];

export const contact: Contact = {
  heading: "Looking for an intern or a hand with a project?",
  intro:
    "Send a message and I reply within a day. A short call or a technical assignment, both work for me.",
  links: [
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
  ],
};
