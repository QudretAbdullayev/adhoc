"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Marquee.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const containerRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const features = featuresRef.current;

    if (!container || !features) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 701px)": function () {
          const getScrollWidth = () =>
            features.scrollWidth - container.offsetWidth;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${getScrollWidth() + 200}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(features, {
            x: () => -getScrollWidth(),
            ease: "none",
            duration: 1,
          })
            .to({}, { duration: 0.15 });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.marquee}>
      <div className={`${styles.marquee__container} marquee-container`} ref={containerRef}>
        <div className={styles.marquee__track} ref={featuresRef}>
          <h2 className={styles.marquee__text}>KEEP TRACK OF</h2>
          <div className={styles.marquee__image}>
            <SafeImage fill src="/home/marquee/cat.svg" alt="Cat" />
          </div>
          <div className={styles.marquee__image}>
            <SafeImage fill src="/home/marquee/dog.png" alt="Dog" />
          </div>
          <h2 className={styles.marquee__text}>YOUR PET&apos;S HEALTH</h2>
          <div className={styles.marquee__image}>
            <SafeImage fill src="/home/marquee/dog.svg" alt="Dog icon" />
          </div>
          <h2 className={styles.marquee__text}>RECORDS, MEAL PLANS</h2>
        </div>

        <p className={styles.marquee__description}>
          Keep your furry friend healthy and happy with one smart app. Track
          vaccines, plan meals, get expert tips.
        </p>
      </div>
    </section>
  );
}