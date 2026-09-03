import styles from "./Masthead.module.css";

export default function Masthead() {
  return (
    <header>
      <div className={styles.topRule} aria-hidden="true" />
      <nav className={`nav ${styles.bar}`} aria-label="Primary">
        <span className={`nav-brand ${styles.brand}`}>Chris Cox</span>
        <a href="#work" className={styles.link}>
          Work
        </a>
        <a href="#skills" className={styles.link}>
          Skills
        </a>
        <a href="#about" className={styles.link}>
          About
        </a>
        <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
          Get in touch
        </a>
      </nav>
      <div className={styles.bottomRule} aria-hidden="true" />
    </header>
  );
}
