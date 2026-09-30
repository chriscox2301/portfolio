import Image from "next/image";
import ChapterHeading from "@/components/ChapterHeading/ChapterHeading";
import type { Dictionary } from "@/content/types";
import styles from "./About.module.css";

interface AboutProps {
  copy: Dictionary["about"];
}

export default function About({ copy }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.section}>
      <ChapterHeading
        numeral="III"
        kicker={copy.kicker}
        headingId="about-heading"
        title={copy.title}
      />

      <div className={styles.body}>
        <div className={styles.prose}>
          <p className={`dropcap ${styles.paragraph}`}>
            {copy.paragraphs[0]}
          </p>
          <p className={styles.paragraphMuted}>{copy.paragraphs[1]}</p>
        </div>
        <figure className={styles.figure}>
          <div className={`plate ${styles.plate}`}>
            <Image
              src="/images/about.jpg"
              alt={copy.photoAlt}
              fill
              sizes="(max-width: 900px) 90vw, 400px"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
