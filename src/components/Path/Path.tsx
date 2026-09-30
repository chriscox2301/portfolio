import ChapterHeading from "@/components/ChapterHeading/ChapterHeading";
import type { Dictionary } from "@/content/types";
import styles from "./Path.module.css";

interface PathProps {
  copy: Dictionary["path"];
  timeline: Dictionary["timeline"];
}

export default function Path({ copy, timeline }: PathProps) {
  return (
    <section aria-labelledby="path-heading" className={styles.section}>
      <ChapterHeading
        numeral="IV"
        kicker={copy.kicker}
        headingId="path-heading"
        title={copy.title}
      />

      <div className={styles.list}>
        {timeline.map((entry) => (
          <div key={`${entry.period}-${entry.title}`} className={styles.row}>
            <span className={styles.period}>{entry.period}</span>
            <div>
              <h3 className={styles.title}>{entry.title}</h3>
              <p className={styles.place}>{entry.place}</p>
              <p className={styles.text}>{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
