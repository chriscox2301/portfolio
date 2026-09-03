import Image from "next/image";
import ChapterHeading from "@/components/ChapterHeading/ChapterHeading";
import { projects } from "@/content/portfolio";
import styles from "./Work.module.css";

interface WorkProps {
  showRoles?: boolean;
}

export default function Work({ showRoles = true }: WorkProps) {
  return (
    <section id="work" aria-labelledby="work-heading" className={styles.section}>
      <ChapterHeading
        numeral="I"
        kicker="Chapter one"
        headingId="work-heading"
        title={
          <>
            Projects I built
            <br />
            while studying
          </>
        }
        intro="Three things I am happy to walk you through line by line, including the parts I would do differently now."
      />

      <div className={styles.list}>
        {projects.map((project, index) => (
          <article key={project.id} className={styles.article}>
            <figure
              className={styles.figure}
              style={{ order: index % 2 === 0 ? 0 : 2 }}
            >
              <div className={`plate ${styles.plate}`}>
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
                  <em className={styles.roleLabel}>What I did:</em>{" "}
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
