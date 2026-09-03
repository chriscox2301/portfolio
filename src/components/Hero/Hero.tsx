import Image from "next/image";
import styles from "./Hero.module.css";

interface HeroProps {
  available?: boolean;
}

export default function Hero({ available = true }: HeroProps) {
  return (
    <div className={styles.header}>
      {available && (
        <div className={styles.availability}>
          <span className={styles.availabilityRule} aria-hidden="true" />
          <span className={styles.availabilityText}>
            Open to internships and freelance work
          </span>
          <span className={styles.availabilityRule} aria-hidden="true" />
        </div>
      )}

      <h1 className={styles.title}>
        <span className={styles.titleLine}>Front-end developer</span>
        <span className={`${styles.titleLine} ${styles.titleAccent}`}>
          with a backend habit.
        </span>
      </h1>

      <div className={styles.kicker}>
        <span className={styles.kickerRule} aria-hidden="true" />
        <span className={styles.kickerText}>Portfolio</span>
        <span className={styles.kickerRule} aria-hidden="true" />
      </div>

      <div className={styles.body}>
        <div>
          <p className={`dropcap ${styles.intro}`}>
            I study HBO-ICT at Zuyd Hogeschool in Heerlen, where I picked
            Backend Development and Interface Development. I like building
            interfaces people can actually use, and I like knowing what
            happens behind them. Currently looking for an internship where I
            can build alongside experienced developers.
          </p>
          <div className={styles.actions}>
            <a href="#work" className={`btn btn-primary ${styles.btnPrimary}`}>
              See my projects
            </a>
            <a
              href="/Chris-Cox-CV.pdf"
              download
              className={`btn btn-ghost ${styles.btnGhost}`}
            >
              Download CV (PDF)
            </a>
          </div>
        </div>

        <figure className={styles.figure}>
          <div className={`plate ${styles.plate}`}>
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Chris Cox"
              fill
              sizes="(max-width: 900px) 90vw, 400px"
              priority
            />
          </div>
          <figcaption className={styles.caption}>Heerlen, 2026</figcaption>
        </figure>
      </div>
    </div>
  );
}
