"use client";

import styles from "./Cases.module.scss";
import Link from "next/link";
import { useEffect, useRef } from "react";

const CASES = [
  {
    id: "kaatom",
    num: "01",
    client: "KAATOM",
    title: "A premium website for a female photographer",
    desc: "A minimal yet striking portfolio that puts the work front and centre.",
    tags: ["Website", "UI/UX"],
    visual: "linear-gradient(160deg, #f5f0eb 0%, #e8e0d8 100%)",
    accent: "#191919",
  },
  {
    id: "kwaliteitscentrum",
    num: "02",
    client: "KWALITEITSCENTRUM",
    title: "Knowledge diagnostics and knowledge sharing platform",
    desc: "A modern platform to centralise expertise and streamline peer learning.",
    tags: ["Web App", "UX Research"],
    visual: "linear-gradient(160deg, #0f1117 0%, #1a1d27 100%)",
    accent: "#FFCC66",
  },
  {
    id: "kortrijk-xpo",
    num: "03",
    client: "KORTRIJK XPO",
    title: "Event management for an international trade fair",
    desc: "End-to-end digital solution for one of Belgium's largest expo venues.",
    tags: ["Web App", "Strategy", "Design"],
    visual: "linear-gradient(160deg, #2d1b69 0%, #4c2f9e 100%)",
    accent: "#C4B5FD",
  },
  {
    id: "all-set",
    num: "04",
    client: "ALL SET",
    title: "Brand identity and digital presence for a creative agency",
    desc: "A bold digital brand that stands out in a crowded market.",
    tags: ["Branding", "Website"],
    visual: "linear-gradient(160deg, #0c1a0c 0%, #1a3a1a 100%)",
    accent: "#86EFAC",
  },
];

const STICKY_TOP = 80; // px — offset from viewport top where cards stick

export default function Cases() {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const cards = Array.from(stack.querySelectorAll("[data-card]"));

    const onScroll = () => {
      cards.forEach((card, i) => {
        // The card behind the current one gets scaled back
        if (i >= cards.length - 1) return;

        const next = cards[i + 1];
        const cardRect = card.getBoundingClientRect();
        const nextTop = next.getBoundingClientRect().top;

        // How far has the next card advanced over this one?
        // 0 = next card hasn't reached sticky top yet
        // 1 = next card fully covers this one
        const progress = Math.max(
          0,
          Math.min(1, 1 - (nextTop - STICKY_TOP) / cardRect.height)
        );

        const scale = 1 - progress * 0.05;
        const brightness = 1 - progress * 0.25;
        card.style.transform = `scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section}>
      {/* ── Header ───────────────────────────────────────── */}
      <div className={`${styles.head} g-container`}>
        <span className={styles.label}>Our work</span>
        <div className={styles.headRow}>
          <h2 className={styles.heading}>Highlighted cases</h2>
          <Link href="/works" className={styles.viewAll}>
            All projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Stacking cards ───────────────────────────────── */}
      <div className={styles.stack} ref={stackRef}>
        {CASES.map((c, i) => (
          <div key={c.id} className={styles.cardSlot}>
            <div
              data-card
              className={styles.card}
              style={{ "--accent": c.accent, zIndex: i + 1 }}
            >
              {/* Left — text content */}
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNum}>
                    {c.num}
                    <span className={styles.cardNumTotal}>/ 0{CASES.length}</span>
                  </span>
                  <span className={styles.cardClient}>{c.client}</span>
                </div>

                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>

                <div className={styles.cardTags}>
                  {c.tags.map((t) => (
                    <span key={t} className={styles.cardTag}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/works/${c.id}`}
                  className={styles.cardLink}
                  style={{ color: c.accent, borderColor: `${c.accent}55` }}
                >
                  View project
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Right — visual */}
              <div
                className={styles.cardVisual}
                style={{ background: c.visual }}
              >
                <div className={styles.browserBar}>
                  <span /><span /><span />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
