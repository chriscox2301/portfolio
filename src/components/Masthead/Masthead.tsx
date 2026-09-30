import { localePath, locales } from "@/content/dictionaries";
import type { Dictionary, Locale } from "@/content/types";
import styles from "./Masthead.module.css";

interface MastheadProps {
  lang: Locale;
  nav: Dictionary["nav"];
}

const languageNames: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
};

export default function Masthead({ lang, nav }: MastheadProps) {
  return (
    <header>
      <div className={styles.topRule} aria-hidden="true" />
      <nav className={`nav ${styles.bar}`} aria-label={nav.label}>
        <span className={`nav-brand ${styles.brand}`}>Chris Cox</span>
        <a href="#work" className={styles.link}>
          {nav.work}
        </a>
        <a href="#skills" className={styles.link}>
          {nav.skills}
        </a>
        <a href="#about" className={styles.link}>
          {nav.about}
        </a>
        <div className={styles.languages} role="group" aria-label={nav.languageLabel}>
          {locales.map((locale) => (
            <a
              key={locale}
              href={localePath(locale)}
              hrefLang={locale}
              lang={locale}
              aria-label={languageNames[locale]}
              aria-current={locale === lang ? "page" : undefined}
              className={`${styles.language} ${locale === lang ? styles.languageActive : ""}`}
            >
              {locale.toUpperCase()}
            </a>
          ))}
        </div>
        <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
          {nav.cta}
        </a>
      </nav>
      <div className={styles.bottomRule} aria-hidden="true" />
    </header>
  );
}
