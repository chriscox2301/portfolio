import Image from "next/image";
import ChapterHeading from "@/components/ChapterHeading/ChapterHeading";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.section}>
      <ChapterHeading
        numeral="III"
        kicker="Chapter three — About me"
        headingId="about-heading"
        title="A second start that stuck"
      />

      <div className={styles.body}>
        <div className={styles.prose}>
          <p className={`dropcap ${styles.paragraph}`}>
            I began at Zuyd in Engineering and left after a year without the
            propedeuse. It was the right call: I came back in 2024 for
            HBO-ICT and found the thing I actually want to do. Design and
            code are the same job to me, which is why I care as much about
            how a page feels as about what the API returns.
          </p>
          <p className={styles.paragraphMuted}>
            Alongside my studies I lead the stocking team at Jumbo in
            Maastricht. Planning shifts, training people and cutting down on
            out-of-stock situations turns out to be good practice for
            teamwork under time pressure. Outside of that: the gym, Linux,
            and side projects I keep breaking on purpose.
          </p>
        </div>
        <figure className={styles.figure}>
          <div className={`plate ${styles.plate}`}>
            <Image
              src="/images/about.jpg"
              alt="Chris Cox at work"
              fill
              sizes="(max-width: 900px) 90vw, 400px"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
