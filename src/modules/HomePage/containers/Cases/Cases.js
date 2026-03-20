"use client";

import styles from "./Cases.module.scss";
import Link from "next/link";
import { useEffect, useRef } from "react";

const CASES = [
  {
    id: "kaatom",
    num: "01",
    title: "Websites",
    subtitle: "that leave a lasting impression",
    desc: "From a simple landing page to a complex multilingual site — we build websites that load fast, align with your brand, and turn visitors into clients.",
    gradient: "linear-gradient(145deg, #b8b0a8 0%, #9c948c 100%)",
  },
  {
    id: "kwaliteitscentrum",
    num: "02",
    title: "Web Apps",
    subtitle: "that make complex journeys simple",
    desc: "Dashboards, platforms, and internal tools — we design and build web applications that handle real workflows without getting in your users' way.",
    gradient: "linear-gradient(145deg, #1e2235 0%, #2e3450 100%)",
  },
  {
    id: "kortrijk-xpo",
    num: "03",
    title: "UI / UX",
    subtitle: "that gives direction before you start",
    desc: "Research, wireframes, prototypes — we map the experience before the first line of code so you build the right thing, not just build the thing right.",
    gradient: "linear-gradient(145deg, #3b2465 0%, #5c3a9e 100%)",
  },
  {
    id: "all-set",
    num: "04",
    title: "Branding",
    subtitle: "that stands out in a crowded market",
    desc: "Strategy, identity, and voice — we help you build a brand that means something. Consistent, recognisable, and built to grow with you.",
    gradient: "linear-gradient(145deg, #143314 0%, #1f4d1f 100%)",
  },
];

const TOTAL = CASES.length.toString().padStart(2, "0");

export default function Cases() {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const cards = Array.from(stack.querySelectorAll("[data-card]"));
    const STICKY_TOP = 100;

    const onScroll = () => {
      cards.forEach((card, i) => {
        if (i >= cards.length - 1) return;
        const cardRect = card.getBoundingClientRect();
        const nextTop = cards[i + 1].getBoundingClientRect().top;
        const progress = Math.max(
          0,
          Math.min(1, 1 - (nextTop - STICKY_TOP) / cardRect.height)
        );
        card.style.transform = `scale(${1 - progress * 0.04})`;
        card.style.filter = `brightness(${1 - progress * 0.18})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.stack} ref={stackRef}>
        {CASES.map((c, i) => (
          <div key={c.id} className={styles.cardSlot}>
            <div data-card className={styles.card} style={{ zIndex: i + 1 }}>

              {/* ── Top bar ── */}
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Our work</span>
                <span className={styles.cardCounter}>{c.num} / {TOTAL}</span>
              </div>

              {/* ── Body ── */}
              <div className={styles.cardBody}>

                {/* Left — visual */}
                <div className={styles.cardVisual} style={{ background: c.gradient }} />

                {/* Right — text */}
                <div className={styles.cardContent}>
                  <div>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardSubtitle}>{c.subtitle}</p>
                  </div>
                  <p className={styles.cardDesc}>{c.desc}</p>
                  <Link href={`/works/${c.id}`} className={styles.cardBtn}>
                    <span className={styles.cardBtnDot} />
                    View project
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
