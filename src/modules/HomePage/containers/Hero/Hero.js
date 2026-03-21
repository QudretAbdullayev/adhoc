"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./Hero.module.scss";

export default function Hero() {
  const t = useTranslations("Hero");

  const STATS = [
    { value: "100+",  label: t("statProjects")    },
    { value: "50+",   label: t("statClients")      },
    { value: "98%",   label: t("statSatisfaction") },
    { value: "10 il", label: t("statExperience")   },
  ];

  return (
    <section className={`${styles.hero} g-container`}>

      <div className={styles.inner}>

        {/* ── Left — text ── */}
        <div className={styles.left}>
          <h1 className={styles.heading}>
            {t("headingLine1")}<br />
            {t("headingLine2")}<br />
            <em className={styles.headingEm}>{t("headingEm")}</em>
          </h1>

          <p className={styles.lead}>{t("lead")}</p>

          <div className={styles.actions}>
            <Link href="/xidmetler" className={styles.btnPrimary}>
              {t("btnServices")}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/elaqe" className={styles.btnGhost}>
              {t("btnContact")}
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
