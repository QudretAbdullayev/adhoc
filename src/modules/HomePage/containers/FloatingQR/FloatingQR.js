"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FloatingQR.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingQR() {
  const qrRef = useRef(null);
  const [isInMarquee, setIsInMarquee] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const qr = qrRef.current;

    if (!qr) return;

    const initAnimation = () => {
      const heroSection = document.querySelector('.hero-container');
      const marqueeSection = document.querySelector('[class*="marquee"]');
      const marqueeContainer = document.querySelector('.marquee-container');
      const marqueeTrack = document.querySelector('[class*="marquee__track"]');

      if (!heroSection || !marqueeSection || !marqueeContainer || !marqueeTrack) {
        requestAnimationFrame(initAnimation);
        return;
      }

      const ctx = gsap.context(() => {
        ScrollTrigger.matchMedia({
          "(min-width: 701px)": function () {
            const startLeft = 360;
            const startTop = 419;
            const startRotation = -15;

            const endLeft = 493.93;
            const endTop = 235.23;
            const endRotation = 15;

            const getScrollWidth = () => {
              return marqueeTrack.scrollWidth - marqueeContainer.offsetWidth;
            };
            gsap.set(qr, {
              position: "fixed",
              left: `${startLeft}rem`,
              top: `${startTop}rem`,
              rotation: startRotation,
            });
            ScrollTrigger.create({
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 0,
              onUpdate: (self) => {
                const progress = self.progress;

                const currentLeft = gsap.utils.interpolate(startLeft, endLeft, progress);
                const currentTop = gsap.utils.interpolate(startTop, endTop, progress);
                const currentRotation = gsap.utils.interpolate(startRotation, endRotation, progress);

                gsap.set(qr, {
                  left: `${currentLeft}rem`,
                  top: `${currentTop}rem`,
                  rotation: currentRotation,
                });
              },
            });

            ScrollTrigger.create({
              trigger: marqueeSection,
              start: () => {
                const qrBottom = (235.23 + 300) * (window.innerWidth / 1600);
                return `top ${qrBottom}px`;
              },
              end: "top top",
              onEnter: () => setIsInMarquee(true),
              onLeaveBack: () => setIsInMarquee(false),
            });

            ScrollTrigger.create({
              trigger: marqueeContainer,
              start: "top top",
              end: () => `+=${getScrollWidth()}`,
              onUpdate: () => {
                gsap.set(qr, {
                  position: "fixed",
                  left: `${endLeft}rem`,
                  top: `${endTop}rem`,
                  rotation: endRotation,
                });
              },
            });

            ScrollTrigger.create({
              trigger: marqueeSection,
              start: () => `top+=${getScrollWidth()} top`,
              end: () => `top+=${getScrollWidth() + 100} top`,
              onEnter: () => setIsVisible(false),
              onLeaveBack: () => setIsVisible(true),
            });
          },
          "(max-width: 700px)": function () {
            gsap.set(qr, { display: "none" });
          },
        });
      });

      return () => ctx.revert();
    };

    initAnimation();
  }, []);

  return (
    <div
      className={`${styles.floatingQR} ${isInMarquee ? styles['floatingQR--inMarquee'] : ''}`}
      ref={qrRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div className={styles.floatingQR__wrapper}>
        <div className={styles.floatingQR__imageWrapper}>
          <div className={styles.floatingQR__image}>
            <SafeImage fill src="/QR.svg" alt="QR Code" />
          </div>
        </div>
        <div className={styles.floatingQR__text}>
          Scan to Download now Dosty App
        </div>
      </div>
    </div>
  );
}