"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./Faq.module.scss";

export default function Faq() {
  const t = useTranslations("Faq");
  const [openIndex, setOpenIndex] = useState(null);

  const ITEMS = Array.from({ length: 6 }, (_, i) => ({
    q: t(`q${i + 1}`),
    a: t(`a${i + 1}`),
  }));

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      <div className="g-container">
        <div className={styles.bottomBar}>
          <h2 className={styles.bottomTitle}>{t("heading")}</h2>
        </div>

        <ul className={styles.list}>
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={i} className={styles.item}>
                <button
                  className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.triggerText}>{item.q}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ""}`}>
                  <div className={styles.bodyInner}>
                    <p className={styles.answer}>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
