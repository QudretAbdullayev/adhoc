"use client";

import styles from "./Statement.module.scss";
import useInView from "@/hooks/useInView";
import Link from "next/link";

export default function Statement() {
  const [ref, inView] = useInView(0.15);

  return (
    <section className={`${styles.section} ${inView ? styles.visible : ""}`} ref={ref}>
      <div className={`${styles.inner} g-container`}>
        <div className={styles.label}>About us</div>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            We are a human&#8209;centered studio. You work directly with the makers.
            We build thoughtful, beautiful, and always pushing the boundaries.
          </h2>

          <div className={styles.aside}>
            <p className={styles.text}>
              We&apos;re a small team of strategists, designers, and developers based in
              Baku, Azerbaijan — working closely with ambitious companies to create
              digital products that actually matter.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryBtn}>
                Start a project
              </Link>
              <Link href="/about" className={styles.secondaryBtn}>
                About us
              </Link>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>50+</span>
                <span className={styles.statLabel}>Projects delivered</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>6+</span>
                <span className={styles.statLabel}>Years of experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Client satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageGrid}>
          <div className={`${styles.imgCard} ${styles.imgCard1}`}>
            <div className={styles.imgPlaceholder} />
          </div>
          <div className={`${styles.imgCard} ${styles.imgCard2}`}>
            <div className={styles.imgPlaceholder} />
          </div>
          <div className={`${styles.imgCard} ${styles.imgCard3}`}>
            <div className={styles.imgPlaceholder} />
          </div>
          <div className={`${styles.imgCard} ${styles.imgCard4}`}>
            <div className={styles.imgPlaceholder} />
          </div>
        </div>
      </div>
    </section>
  );
}
