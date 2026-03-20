"use client";

import styles from "./Journey.module.scss";
import useInView from "@/hooks/useInView";

const FEATURES = [
  {
    num: "01",
    title: "Personal studio",
    desc: "You work directly with us — no middlemen, no account managers involved.",
  },
  {
    num: "02",
    title: "Creative & technical",
    desc: "We blend thoughtful design with rock-solid technical execution.",
  },
  {
    num: "03",
    title: "Hands-on experts",
    desc: "Our team brings deep experience across strategy, design, and engineering.",
  },
  {
    num: "04",
    title: "No quick shortcuts",
    desc: "We take the time to understand your product before writing a single line.",
  },
  {
    num: "05",
    title: "Partners, not suppliers",
    desc: "We treat your success as our own. Long-term relationships matter to us.",
  },
  {
    num: "06",
    title: "Open source & modern",
    desc: "We build on modern, proven technology — always maintained and scalable.",
  },
];

export default function Journey() {
  const [sectionRef, sectionInView] = useInView(0.06);
  const [gridRef, gridInView] = useInView(0.06);

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} g-container`}>

        {/* LEFT — sticky heading */}
        <div
          className={`${styles.headCol} ${sectionInView ? styles.headVisible : ""}`}
          ref={sectionRef}
        >
          <span className={styles.label}>Our approach</span>
          <h2 className={styles.heading}>
            THIS IS<br />WHAT YOUR<br />JOURNEY<br />LOOKS LIKE
          </h2>
        </div>

        {/* RIGHT — 2-col card grid */}
        <div
          className={`${styles.grid} ${gridInView ? styles.gridVisible : ""}`}
          ref={gridRef}
        >
          {FEATURES.map((f, i) => (
            <div
              key={f.num}
              className={styles.card}
              style={{ "--delay": `${i * 0.09}s` }}
            >
              <span className={styles.cardNum}>{f.num}</span>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
