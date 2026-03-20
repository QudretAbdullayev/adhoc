"use client";

import styles from "./Services.module.scss";
import useInView from "@/hooks/useInView";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    title: "Websites",
    desc: "From landing pages to full corporate sites — we build beautiful, fast, and conversion-ready websites that perfectly represent your brand.",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
    href: "/services/websites",
  },
  {
    num: "02",
    title: "Web Applications",
    desc: "Custom web applications built to scale. We architect systems that grow with your business, with clean code and intuitive interfaces.",
    bg: "linear-gradient(135deg, #0d0d0d 0%, #1c1c1c 50%, #2d2d2d 100%)",
    href: "/services/web-apps",
  },
  {
    num: "03",
    title: "UX & Analysis",
    desc: "We research, map, and design user journeys that give direction before you start. No guessing — just data-backed design decisions.",
    bg: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #1a3a5c 100%)",
    href: "/services/ux",
  },
  {
    num: "04",
    title: "Online Marketing",
    desc: "SEO, content strategy, and performance marketing that drives real results. We help you get found and keep your audience engaged.",
    bg: "linear-gradient(135deg, #1a0a2e 0%, #2d1454 50%, #4a1e8a 100%)",
    href: "/services/marketing",
  },
];

function ServiceItem({ service, index }) {
  const [ref, inView] = useInView(0.12);

  return (
    <div
      ref={ref}
      className={`${styles.item} ${inView ? styles.itemVisible : ""}`}
      style={{ "--delay": `${index * 0.08}s` }}
    >
      {/* visual card — image placeholder */}
      <div className={styles.visual} style={{ background: service.bg }}>
        <div className={styles.visualShine} />
      </div>

      {/* text content */}
      <div className={styles.content}>
        <span className={styles.contentLabel}>About what we do</span>
        <div className={styles.contentHead}>
          <span className={styles.contentNum}>{service.num}</span>
          <h3 className={styles.contentTitle}>{service.title}</h3>
        </div>
        <p className={styles.contentDesc}>{service.desc}</p>
        <Link href={service.href} className={styles.contentBtn}>
          Know more
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  const [headRef, headInView] = useInView(0.2);

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} g-container`}>
        <div
          className={`${styles.head} ${headInView ? styles.headVisible : ""}`}
          ref={headRef}
        >
          <span className={styles.label}>What we do</span>
          <h2 className={styles.heading}>Our services</h2>
        </div>

        <div className={styles.list}>
          {SERVICES.map((service, i) => (
            <ServiceItem key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
