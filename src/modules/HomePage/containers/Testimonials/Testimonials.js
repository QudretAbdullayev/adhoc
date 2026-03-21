"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonials.module.scss";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";

const TESTIMONIALS = [
  {
    company: "TechBridge AZ",
    quote: "\"ADHOC bizim bütün iş proseslərimizi yenidən qurdu. Dəqiqlik və peşəkarlıq baxımından əvvəllər gördüyümüz heç bir şirkətlə müqayisə edilə bilməz. Həqiqətən əla iş.\"",
    name: "Kamran Əliyev",
    role: "İcraçı Direktor",
    initials: "KƏ",
  },
  {
    company: "Silk Road Ventures",
    quote: "\"Onlar yalnız məsləhət vermir — düşünür. Hər tövsiyənin arxasında aydın arqument var. Əməkdaşlıqdan sonra gəlirlərimiz ikiqat artdı.\"",
    name: "Leyla Hüseynova",
    role: "Marketinq Direktoru",
    initials: "LH",
  },
  {
    company: "Caspian Tech",
    quote: "\"Cavabdehlər, sürətli və qrafik barədə dürüst. Layihə vaxtında başa çatdı. Bütün proses çox rahat keçdi — bu, yüksək peşəkarlığın əlamətidir.\"",
    name: "Orxan Məmmədov",
    role: "Qurucu",
    initials: "OM",
  },
  {
    company: "Aura Retail",
    quote: "\"Biznesimizin tam strategiyasını yenidən qurmağa ehtiyacımız var idi. ADHOC müasir, ardıcıl və kim olduğumuzu əks etdirən bir yol xəritəsi hazırladı.\"",
    name: "Nigar Rzayeva",
    role: "Brend Direktoru",
    initials: "NR",
  },
  {
    company: "BakuSoft",
    quote: "\"Komanda bizim auditoriyamızı bizdən daha yaxşı anladı. Analiz mərhələsinin özü məhsul strategiyamızı dəyişdirdi. Dərhal geri qaytarılan bir investisiya.\"",
    name: "Tural Qasımov",
    role: "Məhsul Meneceri",
    initials: "TQ",
  },
  {
    company: "Meridian Holdings",
    quote: "\"İlk görüşdən son təhvildə qədər proses tamamilə şəffaf idi. Gizli xərclər yox, buraxılmış son tarixlər yox. Sadəcə əla iş, əla ünsiyyət.\"",
    name: "Aysel Babayeva",
    role: "Əməliyyat Direktoru",
    initials: "AB",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} g-container`}>
        <ComponentTitle title="Müştərilərimiz nə deyir" size="lg" />
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
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.top}>
                  <h3 className={styles.company}>{t.company}</h3>
                  <p className={styles.quote}>{t.quote}</p>
                </div>
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
    </section>
  );
}
