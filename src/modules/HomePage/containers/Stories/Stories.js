"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDots from "@/assets/icons/ThreeDots";
import styles from "./Stories.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    id: 1,
    gradient:
      "linear-gradient(180deg, rgba(255, 204, 102, 0.48) 0%, rgba(255, 204, 102, 0.8) 100%)",
    number: "#01",
    title: "COLOSTRUM\nINTAKE IS\nCRITICAL",
    titleColor: "#714D07",
    label: "FIRST 24 HOURS MATTER",
    description:
      "The mother's first milk, colostrum, builds immunity and protects newborns from early infections. Make sure every pup or kitten gets it within the first few hours.",
  },
  {
    id: 2,
    gradient:
      "linear-gradient(180deg, rgba(102, 117, 255, 0.48) 0%, rgba(102, 117, 255, 0.8) 100%)",
    number: "#02",
    title: "CRAWLING\nBUILDS\nSTRENGTH",
    titleColor: "#072571",
    label: "TINY STEPS, BIG GROWTH",
    description:
      "Crawling helps strengthen muscles and coordination. Give newborns space on a warm surface to move freely and build early motor skills.",
  },
  {
    id: 3,
    gradient:
      "linear-gradient(180deg, rgba(255, 60, 83, 0.48) 0%, rgba(255, 60, 83, 0.8) 100%)",
    number: "#03",
    title: "EARLY\nHANDLING CUES",
    titleColor: "#9F0A1B",
    label: "TRUST STARTS EARLY",
    description:
      "Gentle, short handling from day 3–14 helps pets get used to human touch, reducing fear and stress later in life. Always keep sessions calm and brief.",
  },
];

export default function Stories() {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const contentRef = useRef(null);
  const healthBadgeRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);

  const currentSlideRef = useRef(0);
  const slideProgressRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const phone = phoneRef.current;
    const content = contentRef.current;
    const healthBadge = healthBadgeRef.current;
    if (!section || !phone || !content) return;

    const totalSlides = stories.length;
    const isMobile = window.innerWidth <= 700;

    if (healthBadge) {
      gsap.fromTo(
        healthBadge,
        { y: -200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: content,
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.to(healthBadge, {
        rotation: "+=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    const st = ScrollTrigger.create({
      trigger: isMobile ? phone : section,
      start: isMobile ? "top 80rem" : "top -80rem",
      end: `+=${totalSlides * 1000}`,
      pin: isMobile ? phone : section,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        const rawProgress = scrollProgress * totalSlides;
        const slideIndex = Math.min(Math.floor(rawProgress), totalSlides - 1);
        const progressInSlide = rawProgress - slideIndex;
        const clampedProgress = Math.min(progressInSlide, 1);

        if (currentSlideRef.current !== slideIndex) {
          currentSlideRef.current = slideIndex;
          setCurrentSlide(slideIndex);
        }

        if (Math.abs(slideProgressRef.current - clampedProgress) > 0.01) {
          slideProgressRef.current = clampedProgress;
          setSlideProgress(clampedProgress);
        }
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.stories}>
      <div className={styles.stories__container} ref={sectionRef}>
        <div className={styles.stories__phone} ref={phoneRef}>
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`${styles.stories__slide} ${index === currentSlide ? styles.stories__slide__active : ""
                }`}
              style={{
                opacity: index === currentSlide ? 1 : 0,
                pointerEvents: index === currentSlide ? "auto" : "none",
              }}
            >
              <div className={styles.stories__device}>
                <div
                  className={styles.stories__wrapper}
                  style={{ background: story.gradient }}
                >
                  <div className={styles.stories__header}>
                    <div className={styles.stories__progress}>
                      {stories.map((_, segmentIndex) => (
                        <div
                          key={segmentIndex}
                          className={styles.stories__progress__bar}
                        >
                          <div
                            className={styles.stories__progress__fill}
                            style={{
                              width:
                                segmentIndex < currentSlide
                                  ? "100%"
                                  : segmentIndex === currentSlide
                                    ? `${slideProgress * 100}%`
                                    : "0%",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className={styles.stories__info}>
                      <div className={styles.stories__info__logo}>
                        <SafeImage src="/dosty-square.svg" alt="Dosty" fill />
                      </div>
                      <div className={styles.stories__info__text}>
                        <div className={styles.stories__info__title}>
                          Dosty 2h
                        </div>
                        <div className={styles.stories__info__subtitle}>
                          Your friend
                        </div>
                      </div>
                      <div className={styles.stories__info__dots}>
                        <ThreeDots />
                      </div>
                    </div>
                  </div>
                  <div className={styles.stories__card}>
                    <div className={styles.stories__card__top}>
                      <div className={styles.stories__card__number}>
                        {story.number}
                      </div>
                      <div
                        className={styles.stories__card__title}
                        style={{ color: story.titleColor }}
                      >
                        {story.title}
                      </div>
                    </div>

                    <div className={styles.stories__card__body}>
                      <div className={styles.stories__card__label}>
                        {story.label}
                      </div>
                      <div className={styles.stories__card__text}>
                        {story.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stories__content} ref={contentRef}>
          <div className={styles.stories__label}>SMART CARE MADE SIMPLE</div>
          <h2 className={styles.stories__title}>EARLY LIFE CARE TIPS</h2>
          <div className={styles.stories__badge} ref={healthBadgeRef}>
            HEALTH
          </div>
        </div>
      </div>
    </section>
  );
}