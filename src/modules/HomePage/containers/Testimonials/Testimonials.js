"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import styles from "./Testimonials.module.scss";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const items = t.raw("items");

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} g-container`}>
        <ComponentTitle title={t("heading")} size="lg" />
      </div>

      <div className={styles.sliderWrap}>
        <Swiper
          className={styles.swiper}
          slidesPerView={1.2}
          spaceBetween={16}
          grabCursor
          loop
          breakpoints={{
            700:  { slidesPerView: 2.2, spaceBetween: 20 },
            1000: { slidesPerView: 3.2, spaceBetween: 24 },
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.top}>
                  <h3 className={styles.company}>{item.company}</h3>
                  <p className={styles.quote}>{item.quote}</p>
                </div>
                <div className={styles.author}>
                  <div className={styles.avatar}>{item.initials}</div>
                  <div className={styles.authorMeta}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.role}>{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
