"use client";

import { useEffect, useRef, useState } from "react";
import SafeImage from "@/components/SafeImage/SafeImage";
import styles from "./Features.module.scss";
import Dosty from "@/assets/icons/Dosty";
import { Swiper, SwiperSlide } from 'swiper/react';

const featuresData = [
  {
    id: 1,
    label: "PET PROFILE",
    title: "EVERYTHING ABOUT YOUR PET,\nIN ONE PLACE",
    text: "From breed info to vaccination records — organize it all in your pet's personal profile for quick, easy access anytime.",
    image: "/home/phone1.jpg",
  },
  {
    id: 2,
    label: "AI CHAT",
    title: "INSTANT ANSWERS, TAILORED\nFOR YOUR PET",
    text: "Got a question about symptoms, training, or nutrition? Ask Dost's AI — get expert-backed guidance in seconds.",
    image: "/home/phone2.jpg",
  },
  {
    id: 3,
    label: "WEIGHT GRAPH",
    title: "TRACK HEALTH WITH\nEVERY STEP",
    text: "Stay on top of your pet's growth and fitness. Dost's smart weight tracker helps you spot trends early and keep your buddy in perfect shape.",
    image: "/home/phone3.jpg",
  },
  {
    id: 4,
    label: "SYMPTOM CHECK",
    title: "UNDERSTAND WHAT YOUR\nPET CAN'T SAY",
    text: "Notice unusual behavior or signs of illness? Dost's Symptom Check helps you assess what might be wrong and guides you on when to see a vet.",
    image: "/home/phone4.jpg",
  },
];

export default function Features() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const boxRef = useRef(null);
  const textSwiperRef = useRef(null);
  const phoneSwiperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;

      const rect = boxRef.current.getBoundingClientRect();
      const scrolledIntoBox = -rect.top;

      if (scrolledIntoBox < 0) {
        setActiveSection(0);
        return;
      }

      const boxHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = boxHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        setActiveSection(0);
        return;
      }

      const progress = Math.min(
        1,
        Math.max(0, scrolledIntoBox / scrollableDistance)
      );

      let section = Math.floor(progress * 4);
      section = Math.min(3, Math.max(0, section));

      setActiveSection(section);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    if (textSwiperRef.current) {
      textSwiperRef.current.slideTo(index);
    }
    if (phoneSwiperRef.current) {
      phoneSwiperRef.current.slideTo(index);
    }
  };

  const handlePaginationClick = (index) => {
    handleSlideChange(index);
  };

  const handlePrev = () => {
    if (activeSlide > 0) {
      handleSlideChange(activeSlide - 1);
    }
  };

  const handleNext = () => {
    if (activeSlide < featuresData.length - 1) {
      handleSlideChange(activeSlide + 1);
    }
  };

  return (
    <section className={styles.features}>
      <div className={styles.features__header}>
        <h2 className={styles.features__title}>
          SMART
          <br />
          COMPANION
        </h2>
        <div className={styles.features__logo}>
          <div className={styles.features__logo__image}>
            <SafeImage fill src="/dosty.svg" alt="Dosty" />
          </div>
        </div>
        <div className={styles.features__wordmark}>
          <div className={styles.features__wordmark__image}>
            <SafeImage src="/wordmark.svg" alt="Dosty" fill />
          </div>
        </div>
        <div className={styles.features__badge}>
          <Dosty />
        </div>
      </div>

      <div className={styles.features__mobile}>
        <div className={styles.features__textContainer}>
          <Swiper
            onSwiper={(swiper) => (textSwiperRef.current = swiper)}
            onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
            slidesPerView="auto"
            spaceBetween={16}
            className={styles.features__textSwiper}
          >
            {featuresData.map((feature, index) => (
              <SwiperSlide key={feature.id} className={styles.features__textSlide}>
                <div
                  className={`${styles.features__card} ${activeSlide === index ? styles.features__card__active : ""
                    }`}
                >
                  <span className={styles.features__card__label}>
                    {feature.label}
                  </span>
                  <h3 className={styles.features__card__title}>{feature.title}</h3>
                  <p className={styles.features__card__text}>{feature.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.features__phoneContainer}>
          <Swiper
            onSwiper={(swiper) => (phoneSwiperRef.current = swiper)}
            onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
            slidesPerView={1}
            centeredSlides={true}
            className={styles.features__phoneSwiper}
          >
            {featuresData.map((feature) => (
              <SwiperSlide key={feature.id} className={styles.features__phoneSlide}>
                <div className={styles.features__phoneWrapper}>
                  <SafeImage
                    fill
                    src={feature.image}
                    alt="App Screenshot"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.features__carousel}>
          <button
            className={styles.features__carousel__btn}
            onClick={handlePrev}
            disabled={activeSlide === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={styles.features__carousel__progress}>
            <div className={styles.features__carousel__dots}>
              {featuresData.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.features__carousel__dot} ${activeSlide === index ? styles.features__carousel__dot__active : ""
                    }`}
                  onClick={() => handlePaginationClick(index)}
                />
              ))}
            </div>
          </div>

          <button
            className={styles.features__carousel__btn}
            onClick={handleNext}
            disabled={activeSlide === featuresData.length - 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.features__box} ref={boxRef}>
        <div className={styles.features__container}>
          <div className={styles.features__left}>
            {featuresData.slice(0, 2).map((feature, i) => (
              <div
                key={feature.id}
                className={`${styles.features__item} ${activeSection === i ? styles.features__item__active : ""
                  }`}
              >
                <span className={styles.features__item__label}>
                  {feature.label}
                </span>
                <h3 className={styles.features__item__title}>{feature.title}</h3>
                <p className={styles.features__item__text}>{feature.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.features__phone}>
            <div className={styles.features__phone__wrapper}>
              <SafeImage
                fill
                src={featuresData[activeSection].image}
                alt="App Screenshot"
              />
            </div>
          </div>

          <div className={styles.features__right}>
            {featuresData.slice(2, 4).map((feature, i) => (
              <div
                key={feature.id}
                className={`${styles.features__item} ${activeSection === i + 2 ? styles.features__item__active : ""
                  }`}
              >
                <span className={styles.features__item__label}>
                  {feature.label}
                </span>
                <h3 className={styles.features__item__title}>{feature.title}</h3>
                <p className={styles.features__item__text}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}