export type Locale = "nl" | "en";

export interface Project {
  id: string;
  number: string;
  meta: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  repoUrl: string;
  repoLabel: string;
  imageSrc: string;
  imageAlt: string;
  /** Set for tall screenshots (e.g. a phone app) so they are shown whole instead of cropped. */
  imagePortrait?: boolean;
}

export interface SkillGroup {
  name: string;
  note: string;
  items: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  text: string;
}

export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
  tabularNums?: boolean;
}

/** Error codes returned by `/api/contact`; the form maps them to localized messages. */
export type ContactErrorCode =
  | "nameRequired"
  | "emailRequired"
  | "emailInvalid"
  | "messageRequired"
  | "invalidBody"
  | "notConfigured"
  | "sendFailed";

export interface ContactCopy {
  colophon: string;
  heading: string;
  intro: string;
  links: ContactLink[];
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sent: string;
  statusSending: string;
  statusSent: string;
  statusError: string;
  errors: Record<ContactErrorCode, string>;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    ogTagline: string;
  };
  skipLink: string;
  nav: {
    label: string;
    work: string;
    skills: string;
    about: string;
    cta: string;
    languageLabel: string;
  };
  hero: {
    availability: string;
    titleLine: string;
    titleAccent: string;
    kicker: string;
    intro: string;
    projectsCta: string;
    cvCta: string;
    portraitAlt: string;
    caption: string;
  };
  work: {
    kicker: string;
    titleLines: [string, string];
    intro: string;
    roleLabel: string;
  };
  stack: {
    kicker: string;
    title: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: [string, string];
    photoAlt: string;
  };
  path: {
    kicker: string;
    title: string;
  };
  footer: string;
  projects: Project[];
  skillGroups: SkillGroup[];
  timeline: TimelineEntry[];
  contact: ContactCopy;
}
