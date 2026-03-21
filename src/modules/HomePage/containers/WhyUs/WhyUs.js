"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./WhyUs.module.scss";

const GRADIENTS = [
  "linear-gradient(160deg, #E8E3DC 0%, #CEC5B8 100%)",
  "linear-gradient(160deg, #DAE2E8 0%, #B8C8D4 100%)",
  "linear-gradient(160deg, #E2DDD6 0%, #C8C0B4 100%)",
];

export default function WhyUs() {
  const t = useTranslations("WhyUs");
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    { titleKey: "legal",      gradient: GRADIENTS[0] },
    { titleKey: "hr",         gradient: GRADIENTS[1] },
    { titleKey: "accounting", gradient: GRADIENTS[2] },
  ];

  return (
    <section className={styles.section}>
      {/* ── Top bar ── */}
      <div className={`${styles.topBar} g-container`}>
        <h2 className={styles.topLabel}>{t("sectionTitle")}</h2>
        <Link href="/contact" className={styles.topBtn}>
          {t("contactBtn")}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 4H11M11 4L8.25 6.75M11 4L8.25 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* ── Body — rows + absolute visual ── */}
      <div className={styles.body}>
        {/* Rows */}
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={`${styles.row} ${activeIndex === i ? styles.rowActive : ""}`}
            onMouseEnter={() => setActiveIndex(i)}
          >
            <div className={`${styles.rowInner} g-container`}>
              <h3 className={styles.rowTitle}>{t(item.titleKey)}</h3>
            </div>
          </div>
        ))}

        {/* Visual — absolute filmstrip */}
        <div className={styles.visual} aria-hidden="true">
          <div
            className={styles.strip}
            style={{ "--active": activeIndex }}
          >
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className={styles.frame}
                style={{ background: item.gradient }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
