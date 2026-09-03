import { skillGroups } from "@/content/portfolio";
import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={`bleed ${styles.section}`}
    >
      <span className={styles.ghost} aria-hidden="true">
        II
      </span>
      <div className={styles.inner}>
        <span className={styles.kicker}>Chapter two — Stack</span>
        <h2 id="skills-heading" className={styles.title}>
          What I work with
        </h2>
        <div className={styles.rule} aria-hidden="true" />
        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className={styles.groupTitle}>{group.name}</h3>
              <p className={styles.groupNote}>{group.note}</p>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <span key={item} className={styles.item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
