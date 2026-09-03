import ChapterHeading from "@/components/ChapterHeading/ChapterHeading";
import { timeline } from "@/content/portfolio";
import styles from "./Path.module.css";

export default function Path() {
  return (
    <section aria-labelledby="path-heading" className={styles.section}>
      <ChapterHeading
        numeral="IV"
        kicker="Chapter four — Path"
        headingId="path-heading"
        title="Education and experience"
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
