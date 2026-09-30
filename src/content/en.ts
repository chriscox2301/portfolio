import { contactLinks, repos } from "./shared";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Chris Cox — Front-end developer",
    description:
      "Front-end developer with a backend habit — HBO-ICT student at Zuyd Hogeschool in Heerlen, building interfaces people can actually use.",
    ogLocale: "en_US",
    ogTagline: "Front-end developer with a backend habit.",
  },
  skipLink: "Skip to content",
  nav: {
    label: "Primary",
    work: "Work",
    skills: "Skills",
    about: "About",
    cta: "Get in touch",
    languageLabel: "Language",
  },
  hero: {
    availability: "Open to internships and freelance work",
    titleLine: "Front-end developer",
    titleAccent: "with a backend habit.",
    kicker: "Portfolio",
    intro:
      "I study HBO-ICT at Zuyd Hogeschool in Heerlen, where I picked Backend Development and Interface Development. I like building interfaces people can actually use, and I like knowing what happens behind them. Currently looking for an internship where I can build alongside experienced developers.",
    projectsCta: "See my projects",
    cvCta: "Download CV (PDF, Dutch)",
    portraitAlt: "Portrait of Chris Cox",
    caption: "Heerlen, 2026",
  },
  work: {
    kicker: "Chapter one",
    titleLines: ["Projects I built", "while studying"],
    intro:
      "Three things I am happy to walk you through line by line, including the parts I would do differently now.",
    roleLabel: "What I did:",
  },
  stack: {
    kicker: "Chapter two — Stack",
    title: "What I work with",
  },
  about: {
    kicker: "Chapter three — About me",
    title: "A second start that stuck",
    paragraphs: [
      "I began at Zuyd in Engineering and left after a year without the propedeuse. It was the right call: I came back in 2024 for HBO-ICT and found the thing I actually want to do. Design and code are the same job to me, which is why I care as much about how a page feels as about what the API returns.",
      "Alongside my studies I lead the stocking team at Jumbo in Maastricht. Planning shifts, training people and cutting down on out-of-stock situations turns out to be good practice for teamwork under time pressure. Outside of that: the gym, Linux, and side projects I keep breaking on purpose.",
    ],
    photoAlt: "Chris Cox at work",
  },
  path: {
    kicker: "Chapter four — Path",
    title: "Education and experience",
  },
  footer:
    "Chris Cox — HBO-ICT, Zuyd Hogeschool Heerlen. Built with Next.js and React.",
  projects: [
    {
      id: "klantbestelsysteem",
      number: "01",
      meta: "HBO-ICT project",
      title: "KlantBestelSysteem",
      description:
        "Ordering system for customers of a fictional mechanical parts website.",
      role: "the full ASP.NET Core MVC application — data model, order flow and the customer-facing screens.",
      stack: ["C#", "ASP.NET Core MVC", "HTML", "CSS", "JavaScript"],
      imageAlt: "Screenshot of the KlantBestelSysteem order flow",
      ...repos.klantbestelsysteem,
    },
    {
      id: "bezorgapplicatie",
      number: "02",
      meta: "HBO-ICT project",
      title: "BezorgApplicatie",
      description: "Mobile application in .NET MAUI for delivery drivers.",
      role: "the app's screens and navigation, plus the delivery data it works from.",
      stack: [".NET MAUI", "C#", "XAML", "Responsive design"],
      imageAlt: "Screenshot of the BezorgApplicatie mobile app",
      ...repos.bezorgapplicatie,
    },
    {
      id: "adminbackoffice",
      number: "03",
      meta: "HBO-ICT project",
      title: "AdminBackOffice",
      description: "Web-based admin back-office application.",
      role: "the navigation and the flow of the back office.",
      stack: ["C#", "ASP.NET Core MVC"],
      imageAlt: "Screenshot of the AdminBackOffice back office",
      ...repos.adminbackoffice,
    },
  ],
  skillGroups: [
    {
      name: "Front-end",
      note: "Where I spend most of my time",
      items: ["HTML", "CSS", "JavaScript", "Responsive design", ".NET MAUI"],
    },
    {
      name: "Back-end",
      note: "From the backend track at Zuyd",
      items: ["C#", "ASP.NET Core MVC", "Python"],
    },
    {
      name: "Working style",
      note: "Habits from study and from leading a team",
      items: [
        "Leadership",
        "Team player",
        "Communicative",
        "Customer-focused",
        "Problem solving",
      ],
    },
    {
      name: "Languages",
      note: "What I speak and write",
      items: ["Dutch — native", "English — proficient", "German — basic"],
    },
  ],
  timeline: [
    {
      period: "Jun 2026",
      title: "Emergency response training (BHV)",
      place: "Course, certified",
      text: "First aid, evacuation coordination and fire-fighting technique.",
    },
    {
      period: "Feb 2026 — present",
      title: "Stocking team lead",
      place: "Jumbo Supermarkten, Maastricht Mosae Forum",
      text: "Leading and training the stocking team, planning shifts and deliveries, and fixing the bottlenecks that slow a shift down.",
    },
    {
      period: "2024 — present",
      title: "HBO-ICT",
      place: "Zuyd Hogeschool, Heerlen",
      text: "Tracks: Backend Development and Interface Development.",
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
  ],
  contact: {
    colophon: "Colophon",
    heading: "Looking for an intern or a hand with a project?",
    intro:
      "Send a message and I'll reply within a day. A short call or a technical assignment — either works for me.",
    links: contactLinks,
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.nl",
    messageLabel: "Message",
    messagePlaceholder: "What would you like to build?",
    submit: "Send message",
    sent: "Thanks — I'll be in touch",
    statusSending: "Sending your message…",
    statusSent: "Thanks — I'll be in touch.",
    statusError: "Something went wrong. Please check the form.",
    errors: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email.",
      emailInvalid: "That doesn't look like a valid email address.",
      messageRequired: "Please enter a message.",
      invalidBody: "Invalid request.",
      notConfigured: "The contact form is not configured yet.",
      sendFailed: "Could not send your message. Please try again.",
    },
  },
};
