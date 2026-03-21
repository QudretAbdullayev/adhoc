"use client";

import Link from "next/link";
import styles from "./Hero.module.scss";

const STATS = [
  { value: "100+", label: "Tamamlanmış layihə" },
  { value: "50+",  label: "Müştəri"            },
  { value: "98%",  label: "Məmnuniyyət dərəcəsi"},
  { value: "10 il",label: "Sahə təcrübəsi"     },
];

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={`${styles.inner} g-container`}>

        {/* ── Left — text ── */}
        <div className={styles.left}>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Konsaltinq Şirkəti — Bakı, Azərbaycan
          </div>

          <h1 className={styles.heading}>
            Biznesinizi<br />
            növbəti<br />
            <em className={styles.headingEm}>səviyyəyə çatdırırıq.</em>
          </h1>

          <p className={styles.lead}>
            Strateji planlaşdırmadan iş proseslərinin optimallaşdırılmasına qədər —
            sizin uğurunuz bizim hədəfimizdir.
          </p>

          <div className={styles.actions}>
            <Link href="/xidmetler" className={styles.btnPrimary}>
              Xidmətlərimiz
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/elaqe" className={styles.btnGhost}>
              Bizimlə əlaqə
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
