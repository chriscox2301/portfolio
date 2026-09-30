import Image from "next/image";
import type { Dictionary } from "@/content/types";
import styles from "./Hero.module.css";

interface HeroProps {
  copy: Dictionary["hero"];
  available?: boolean;
}

export default function Hero({ copy, available = true }: HeroProps) {
  return (
    <div className={styles.header}>
      {available && (
        <div className={styles.availability}>
          <span className={styles.availabilityRule} aria-hidden="true" />
          <span className={styles.availabilityText}>
            {copy.availability}
          </span>
          <span className={styles.availabilityRule} aria-hidden="true" />
        </div>
      )}

      <h1 className={styles.title}>
        <span className={styles.titleLine}>{copy.titleLine}</span>
        <span className={`${styles.titleLine} ${styles.titleAccent}`}>
          {copy.titleAccent}
        </span>
      </h1>

      <div className={styles.kicker}>
        <span className={styles.kickerRule} aria-hidden="true" />
        <span className={styles.kickerText}>{copy.kicker}</span>
        <span className={styles.kickerRule} aria-hidden="true" />
      </div>

      <div className={styles.body}>
        <div>
          <p className={`dropcap ${styles.intro}`}>
            {copy.intro}
          </p>
          <div className={styles.actions}>
            <a href="#work" className={`btn btn-primary ${styles.btnPrimary}`}>
              {copy.projectsCta}
            </a>
            <a
              href="/Chris-Cox-CV.pdf"
              download
              className={`btn btn-ghost ${styles.btnGhost}`}
            >
              {copy.cvCta}
            </a>
          </div>
        </div>

        <figure className={styles.figure}>
          <div className={`plate ${styles.plate}`}>
            <Image
              src="/images/portrait.png"
              alt={copy.portraitAlt}
              fill
              sizes="(max-width: 900px) 90vw, 400px"
              priority
            />
          </div>
          <figcaption className={styles.caption}>{copy.caption}</figcaption>
        </figure>
      </div>
    </div>
  );
}
