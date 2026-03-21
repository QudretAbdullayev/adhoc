"use client";

import Link from "next/link";
import styles from "./Hero.module.scss";

const STATS = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients worldwide"  },
  { value: "98%", label: "Satisfaction rate"  },
  { value: "5yr", label: "In the industry"    },
];


export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ── Background ── */}
      <div className={styles.glowPrimary}   aria-hidden="true" />
      <div className={styles.glowSecondary} aria-hidden="true" />
      <div className={styles.grid}          aria-hidden="true" />

      <div className={`${styles.inner} g-container`}>

        {/* ── Left — text ── */}
        <div className={styles.left}>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Digital Agency — Baku, Azerbaijan
          </div>

          <h1 className={styles.heading}>
            We build<br />
            digital things<br />
            <em className={styles.headingEm}>that matter.</em>
          </h1>

          <p className={styles.lead}>
            From brand identity to full-scale web applications — we design and
            engineer products that connect with your audience and drive results.
          </p>

          <div className={styles.actions}>
            <Link href="/works" className={styles.btnPrimary}>
              See our work
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact" className={styles.btnGhost}>
              Talk to us
            </Link>
          </div>

          {/* ── Stats ── */}
          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ── Right — visual ── */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.visualInner} />
        </div>

      </div>
    </section>
  );
}
