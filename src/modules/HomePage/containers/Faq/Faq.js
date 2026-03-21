"use client";

import { useState } from "react";
import styles from "./Faq.module.scss";
import useInView from "@/hooks/useInView";

const ITEMS = [
  {
    q: "What types of projects does AD HOC take on?",
    a: "We work on digital products end-to-end — from brand identity and UX strategy to frontend development and launch. We typically partner with startups, scale-ups, and established businesses looking to redesign or build something new.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on the scope. A focused landing page or brand refresh can take 2–4 weeks. A full product design and build usually runs 6–16 weeks. We'll give you a clear timeline during our first conversation.",
  },
  {
    q: "Do you work with clients outside of Azerbaijan?",
    a: "Yes — we work remotely with clients across Europe, the Middle East, and Central Asia. Our process is built for async collaboration, so timezone differences rarely cause friction.",
  },
  {
    q: "What does your process look like?",
    a: "We start with a discovery phase to understand your goals and users. From there we move into design (wireframes → visual design → prototype), then development, QA, and handoff. You're involved at every stage — no black boxes.",
  },
  {
    q: "Can you take over an existing codebase or design system?",
    a: "Yes. We regularly step into ongoing projects to audit, refactor, or extend existing work. We'll review what's there first and give you an honest assessment before committing.",
  },
  {
    q: "How do we get started?",
    a: "Send us a brief overview of your project through the contact form or by email. We'll schedule a short call to align on scope, timeline, and fit — and take it from there.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [headRef, headVisible] = useInView(0.2);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} g-container`}>
        {/* Head */}
        <div className={styles.head} ref={headRef}>
          <div className={styles.titleWrap}>
            <h2
              className={`${styles.title} ${headVisible ? styles.titleVisible : ""}`}
            >
              Frequently
            </h2>
          </div>
          <div className={styles.titleWrap}>
            <h2
              className={`${styles.title} ${headVisible ? styles.titleVisible : ""}`}
              style={{ "--i": 1 }}
            >
              asked questions.
            </h2>
          </div>
        </div>

        {/* Accordion */}
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={styles.body}
                  style={{ "--open": isOpen ? 1 : 0 }}
                >
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
