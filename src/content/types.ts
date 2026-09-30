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

export interface Contact {
  heading: string;
  intro: string;
  links: ContactLink[];
}
