import { contactLinks, repos } from "./shared";
import type { Dictionary } from "./types";

export const nl: Dictionary = {
  meta: {
    title: "Chris Cox — Front-end developer",
    description:
      "Front-end developer met een zwak voor backend. HBO-ICT-student aan Zuyd Hogeschool in Heerlen die interfaces bouwt waar mensen echt mee uit de voeten kunnen.",
    ogLocale: "nl_NL",
    ogTagline: "Front-end developer met een zwak voor backend.",
  },
  skipLink: "Naar de inhoud",
  nav: {
    label: "Hoofdmenu",
    work: "Werk",
    skills: "Vaardigheden",
    about: "Over mij",
    cta: "Neem contact op",
    languageLabel: "Taal",
  },
  hero: {
    availability: "Open voor stages en freelancewerk",
    titleLine: "Front-end developer",
    titleAccent: "met een zwak voor backend.",
    kicker: "Portfolio",
    intro:
      "Ik studeer HBO-ICT aan Zuyd Hogeschool in Heerlen, met de richtingen Backend Development en Interface Development. Ik bouw graag interfaces waar mensen echt mee uit de voeten kunnen, en ik wil weten wat er achter die interfaces gebeurt. Ik zoek een stage waar ik samen met ervaren developers kan bouwen.",
    projectsCta: "Bekijk mijn projecten",
    cvCta: "Download cv (pdf)",
    portraitAlt: "Portret van Chris Cox",
    caption: "Heerlen, 2026",
  },
  work: {
    kicker: "Hoofdstuk een",
    titleLines: ["Projecten die ik bouwde", "tijdens mijn studie"],
    intro:
      "Drie projecten die ik je graag regel voor regel laat zien, inclusief de delen die ik nu anders zou doen.",
    roleLabel: "Wat ik deed:",
  },
  stack: {
    kicker: "Hoofdstuk twee — Stack",
    title: "Waar ik mee werk",
  },
  about: {
    kicker: "Hoofdstuk drie — Over mij",
    title: "Een tweede start die raak was",
    paragraphs: [
      "Ik begon op Zuyd met Engineering en stopte na een jaar zonder propedeuse. Dat was de juiste keuze: in 2024 kwam ik terug voor HBO-ICT en vond ik wat ik echt wil doen. Design en code zijn voor mij hetzelfde vak. Daarom vind ik het net zo belangrijk hoe een pagina aanvoelt als wat de API teruggeeft.",
      "Naast mijn studie ben ik vulploegleider bij Jumbo in Maastricht. Diensten plannen, mensen inwerken en out-of-stocks terugdringen blijkt een goede oefening in samenwerken onder tijdsdruk. Verder: de sportschool, Linux en hobbyprojecten die ik met opzet blijf slopen.",
    ],
    photoAlt: "Chris Cox aan het werk",
  },
  path: {
    kicker: "Hoofdstuk vier — Loopbaan",
    title: "Opleiding en ervaring",
  },
  footer:
    "Chris Cox — HBO-ICT, Zuyd Hogeschool Heerlen. Gebouwd met Next.js en React.",
  projects: [
    {
      id: "klantbestelsysteem",
      number: "01",
      meta: "HBO-ICT-project",
      title: "KlantBestelSysteem",
      description:
        "Bestelsysteem voor klanten van een fictieve webshop in machineonderdelen.",
      role: "de volledige ASP.NET Core MVC-applicatie: het datamodel, de bestelflow en de schermen voor de klant.",
      stack: ["C#", "ASP.NET Core MVC", "HTML", "CSS", "JavaScript"],
      imageAlt: "Screenshot van de bestelflow van KlantBestelSysteem",
      ...repos.klantbestelsysteem,
    },
    {
      id: "bezorgapplicatie",
      number: "02",
      meta: "HBO-ICT-project",
      title: "BezorgApplicatie",
      description: "Mobiele app in .NET MAUI voor bezorgers.",
      role: "de schermen en navigatie van de app, plus de bezorgdata waarmee de app werkt.",
      stack: [".NET MAUI", "C#", "XAML", "Responsive design"],
      imageAlt: "Screenshot van de mobiele app BezorgApplicatie",
      ...repos.bezorgapplicatie,
    },
    {
      id: "adminbackoffice",
      number: "03",
      meta: "HBO-ICT-project",
      title: "AdminBackOffice",
      description: "Webapplicatie voor de back-office van beheerders.",
      role: "de navigatie en de flow van de back-office.",
      stack: ["C#", "ASP.NET Core MVC"],
      imageAlt: "Screenshot van de back-office van AdminBackOffice",
      ...repos.adminbackoffice,
    },
  ],
  skillGroups: [
    {
      name: "Front-end",
      note: "Waar ik de meeste tijd in steek",
      items: ["HTML", "CSS", "JavaScript", "Responsive design", ".NET MAUI"],
    },
    {
      name: "Back-end",
      note: "Uit de backendrichting op Zuyd",
      items: ["C#", "ASP.NET Core MVC", "Python"],
    },
    {
      name: "Werkwijze",
      note: "Gewoontes uit mijn studie en als leidinggevende",
      items: [
        "Leiderschap",
        "Teamspeler",
        "Communicatief",
        "Klantgericht",
        "Probleemoplossend",
      ],
    },
    {
      name: "Talen",
      note: "Wat ik spreek en schrijf",
      items: ["Nederlands — moedertaal", "Engels — goed", "Duits — basis"],
    },
  ],
  timeline: [
    {
      period: "jun 2026",
      title: "Bedrijfshulpverlening (BHV)",
      place: "Cursus met certificaat",
      text: "Eerste hulp, evacuaties coördineren en brandbestrijding.",
    },
    {
      period: "feb 2026 — heden",
      title: "Vulploegleider",
      place: "Jumbo Supermarkten, Maastricht Mosae Forum",
      text: "De vulploeg aansturen en inwerken, diensten en bevoorrading plannen en de knelpunten oplossen die een dienst vertragen.",
    },
    {
      period: "2024 — heden",
      title: "HBO-ICT",
      place: "Zuyd Hogeschool, Heerlen",
      text: "Richtingen: Backend Development en Interface Development.",
    },
    {
      period: "2022 — 2023",
      title: "Engineering",
      place: "Zuyd Hogeschool, Heerlen",
      text: "Gestopt na het eerste jaar; de propedeuse is niet behaald.",
    },
    {
      period: "feb 2019 — okt 2020",
      title: "Vakkenvuller",
      place: "Nettorama, Sittard",
      text: "Schappen aanvullen, houdbaarheidsdata controleren en klanten helpen vinden wat ze zoeken.",
    },
  ],
  contact: {
    colophon: "Colofon",
    heading: "Op zoek naar een stagiair of een extra hand bij een project?",
    intro:
      "Stuur een bericht, dan reageer ik binnen een dag. Een kort gesprek of een technische opdracht: allebei prima.",
    links: contactLinks,
    nameLabel: "Naam",
    namePlaceholder: "Je naam",
    emailLabel: "E-mail",
    emailPlaceholder: "jij@bedrijf.nl",
    messageLabel: "Bericht",
    messagePlaceholder: "Wat wil je bouwen?",
    submit: "Verstuur bericht",
    sent: "Bedankt, ik neem contact op",
    statusSending: "Je bericht wordt verstuurd…",
    statusSent: "Bedankt, ik neem contact op.",
    statusError: "Er ging iets mis. Controleer het formulier.",
    errors: {
      nameRequired: "Vul je naam in.",
      emailRequired: "Vul je e-mailadres in.",
      emailInvalid: "Dit lijkt geen geldig e-mailadres.",
      messageRequired: "Vul een bericht in.",
      invalidBody: "Ongeldig verzoek.",
      notConfigured: "Het contactformulier is nog niet ingesteld.",
      sendFailed: "Je bericht kon niet worden verstuurd. Probeer het opnieuw.",
    },
  },
};
