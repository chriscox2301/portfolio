import { en } from "./en";
import { nl } from "./nl";
import type { Dictionary, Locale } from "./types";

export const locales: Locale[] = ["nl", "en"];
export const defaultLocale: Locale = "nl";

const dictionaries: Record<Locale, Dictionary> = { nl, en };

export function hasLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Dutch lives at `/` (rewritten to `/nl` in next.config.ts), English at `/en`. */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}
