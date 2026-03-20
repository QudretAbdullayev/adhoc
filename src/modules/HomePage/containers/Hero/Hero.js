import styles from "./Hero.module.scss";
import Link from "next/link";

const TITLE_LINES = ["TOGETHER", "ON A DIGITAL", "JOURNEY"];

const CLIENTS = [
  "Kortrijk XPO", "Kultuurpunt", "All Set", "Kaatom", "LaatDrukken",
  "Bilkem", "Nour Regenmorter", "317", "Kortrijk XPO", "Kultuurpunt",
  "All Set", "Kaatom", "LaatDrukken", "Bilkem", "Nour Regenmorter", "317",
];

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={`g-container`}>
        <div className={styles.badge}>
          <span className={styles.badgePill}>
            <span className={styles.badgeDot} />
            Digital studio — Baku
          </span>
        </div>
      </div>

      <div className={`${styles.inner} g-container`}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            {TITLE_LINES.map((line, i) => (
              <span key={i} className={styles.titleLine}>
                <span className={styles.titleWord} style={{ "--i": i }}>{line}</span>
              </span>
            ))}
          </h1>
          <p className={styles.eyebrow}>
            We never just build a website — we create a digital experience.
          </p>
        </div>

        <div className={styles.right}>
          <p className={styles.description}>
            Expect creative design and thoughtful strategy that comes to life
            technically. And, of course, results ready for your digital journey.
          </p>
          <Link href="/contact" className={styles.cta}>
            Get the journey started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>

      <div className={styles.clients} aria-hidden="true">
        <div className={styles.clientsTrack}>
          {CLIENTS.map((name, i) => (
            <span key={i} className={styles.clientName}>
              {name}
              <span className={styles.clientSep}> • </span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
