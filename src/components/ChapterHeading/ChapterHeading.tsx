import type { ReactNode } from "react";
import styles from "./ChapterHeading.module.css";

interface ChapterHeadingProps {
  numeral: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  headingId?: string;
}

export default function ChapterHeading({
  numeral,
  kicker,
  title,
  intro,
  headingId,
}: ChapterHeadingProps) {
  return (
    <div className={styles.wrap}>
      <span className={styles.numeral} aria-hidden="true">
        {numeral}
      </span>
      {intro ? (
        <div className={styles.withIntro}>
          <div>
            <span className={styles.kicker}>{kicker}</span>
            <h2 id={headingId} className={styles.title}>
              {title}
            </h2>
          </div>
          <p className={styles.intro}>{intro}</p>
        </div>
      ) : (
        <>
          <span className={styles.kicker}>{kicker}</span>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
        </>
      )}
    </div>
  );
}
