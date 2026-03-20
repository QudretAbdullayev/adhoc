import React, { useEffect, useRef } from "react";
import styles from "./PetHeroDisplay.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoreLinks from "@/components/StoreLinks/StoreLinks";

gsap.registerPlugin(ScrollTrigger);

const PetHeroDisplay = () => {
  const heroRef = useRef(null);
  const iconsRef = useRef([]);

  const iconFeatures = [
    { icon: "/home/hero-display/fish.svg" },
    { icon: "/home/hero-display/bee.svg" },
    { icon: "/home/hero-display/dog.svg" },
    { icon: "/home/hero-display/bulldog.svg" },
    { icon: "/home/hero-display/butterflyfish.svg" },
    { icon: "/home/hero-display/cat.svg" },
    { icon: "/home/hero-display/baboon.svg" },
    { icon: "/home/hero-display/cardinal.svg" },
  ];

  useEffect(() => {
    const icons = iconsRef.current.filter(Boolean);

    icons.forEach((icon) => {
      gsap.set(icon, {
        opacity: 1,
        y: 100
      });
    });

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top 10%",
      once: true,
      onEnter: () => {
        icons.forEach((icon, index) => {
          gsap.to(icon, {
            opacity: 1,
            scale: 1,
            y: -1000,
            duration: 1,
            delay: index * 0.08,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(icon, {
                opacity: 1,
                duration: 0.2
              });
            }
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__container}>
        <div className={styles.hero__description}>
          <div className={styles.hero__label}>
            <p>FUN FACTS</p>
          </div>
          <div className={styles.hero__text}>
            <p>Vaccines, nutrition</p>
            <p>to training</p>
          </div>
        </div>

        <div className={styles.hero__feature}>
          <h1 className={styles.hero__title}>
            YOUR DOG&apos;S NOSE PRINT IS UNIQUE
            <span className={styles.hero__stores}>
              <span className={styles.hero__tagline}>
                Dosty application for iOS and for Android
              </span>

              <StoreLinks />
            </span>
          </h1>

          {iconFeatures.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (iconsRef.current[index] = el)}
              className={styles.hero__icon}
              data-index={index}
            >
              <div className={styles.hero__icon__image}>
                <SafeImage src={feature.icon} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetHeroDisplay;