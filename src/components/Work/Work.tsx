import Image from "next/image";
import ChapterHeading from "@/components/ChapterHeading/ChapterHeading";
import type { Dictionary } from "@/content/types";
import styles from "./Work.module.css";

interface WorkProps {
  copy: Dictionary["work"];
  projects: Dictionary["projects"];
  showRoles?: boolean;
}

export default function Work({ copy, projects, showRoles = true }: WorkProps) {
  return (
    <section id="work" aria-labelledby="work-heading" className={styles.section}>
      <ChapterHeading
        numeral="I"
        kicker={copy.kicker}
        headingId="work-heading"
        title={
          <>
            {copy.titleLines[0]}
            <br />
            {copy.titleLines[1]}
          </>
        }
        intro={copy.intro}
      />

      <div className={styles.list}>
        {projects.map((project, index) => (
          <article key={project.id} className={styles.article}>
            <figure
              className={`${styles.figure} ${index % 2 === 0 ? "" : styles.figureFlipped}`}
            >
              <div
                className={`plate ${styles.plate} ${project.imagePortrait ? styles.platePortrait : ""}`}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 700px) 90vw, 500px"
                />
              </div>
            </figure>
            <div>
              <div className={styles.metaRow}>
                <span className={styles.number}>{project.number}</span>
                <span className={styles.meta}>{project.meta}</span>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              {showRoles && (
                <p className={styles.role}>
                  <em className={styles.roleLabel}>{copy.roleLabel}</em>{" "}
                  {project.role}
                </p>
              )}
              <div className={styles.tags}>
                {project.stack.map((tech) => (
                  <span key={tech} className={`tag tag-outline ${styles.tag}`}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.repo}
              >
                {project.repoLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
