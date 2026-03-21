"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonials.module.scss";

const TESTIMONIALS = [
  {
    company: "TechBridge AZ",
    quote:
      "\"AD HOC rebuilt our entire digital presence in a matter of weeks. The precision and attention to detail was unlike anything we had experienced with previous agencies. Truly exceptional work.\"",
    name: "Kamran Əliyev",
    role: "CEO",
    initials: "KA",
  },
  {
    company: "Silk Road Ventures",
    quote:
      "\"They do not just design — they think. Every screen they delivered had a clear reason behind it, and our conversion rate has doubled since the redesign launched.\"",
    name: "Leyla Hüseynova",
    role: "Head of Marketing",
    initials: "LH",
  },
  {
    company: "Caspian Tech",
    quote:
      "\"Responsive, fast, and honest about timelines. The product launched on schedule and our users love it. The whole process felt effortless — and that is the mark of a great team.\"",
    name: "Orkhan Mammadov",
    role: "Founder",
    initials: "OM",
  },
  {
    company: "Aura Retail",
    quote:
      "\"Our brand needed a complete overhaul. AD HOC delivered a system that is consistent, modern, and finally represents who we are. We get compliments on it every single day.\"",
    name: "Nigar Rzayeva",
    role: "Brand Director",
    initials: "NR",
  },
  {
    company: "BakuSoft",
    quote:
      "\"The team understood our audience better than we did. The UX research phase alone changed how we think about our product roadmap. An investment that paid back immediately.\"",
    name: "Tural Qasımov",
    role: "Product Manager",
    initials: "TQ",
  },
  {
    company: "Meridian Holdings",
    quote:
      "\"From first brief to final handoff, the process was completely transparent. No hidden costs, no missed deadlines. Just great work, great communication, and a result we are proud of.\"",
    name: "Aysel Babayeva",
    role: "COO",
    initials: "AB",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} g-container`}>
        <h2 className={styles.heading}>What our clients say</h2>

        <div className={styles.sliderWrap}>
          <Swiper
            className={styles.swiper}
            slidesPerView={1.1}
            spaceBetween={24}
            grabCursor
            loop
            breakpoints={{
              700:  { slidesPerView: 1.5, spaceBetween: 24 },
              1000: { slidesPerView: 2,   spaceBetween: 24 },
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <div className={styles.card}>
                  {/* Top — company + quote */}
                  <div className={styles.top}>
                    <h3 className={styles.company}>{t.company}</h3>
                    <p className={styles.quote}>{t.quote}</p>
                  </div>

                  {/* Bottom — author */}
                  <div className={styles.author}>
                    <div className={styles.avatar}>{t.initials}</div>
                    <div className={styles.authorMeta}>
                      <span className={styles.name}>{t.name}</span>
                      <span className={styles.role}>{t.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
