"use client";

import styles from "./News.module.scss";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const NEWS = [
  {
    id: 1,
    slug: "why-your-website-is-losing-clients",
    category: "Websites",
    date: "14 Mar 2026",
    title: "Why your website is silently losing you clients",
    excerpt:
      "Most business websites look fine — but are built in a way that drives potential customers away before they even read a word.",
    gradient: "linear-gradient(145deg, #0C1828 0%, #122036 100%)",
  },
  {
    id: 2,
    slug: "ux-before-development",
    category: "UI/UX",
    date: "08 Mar 2026",
    title: "Why UX research before development saves you money",
    excerpt:
      "Skipping the research phase feels like saving time. In practice, it's one of the most expensive decisions you can make on a digital project.",
    gradient: "linear-gradient(145deg, #0D1E36 0%, #0B1C32 100%)",
  },
  {
    id: 3,
    slug: "brand-identity-checklist",
    category: "Branding",
    date: "02 Mar 2026",
    title: "The 7-point brand identity checklist for 2026",
    excerpt:
      "A strong brand is more than a logo. Here's what your identity system needs to be consistent, recognisable, and built to scale.",
    gradient: "linear-gradient(145deg, #0B1E26 0%, #0D2030 100%)",
  },
  {
    id: 4,
    slug: "web-app-vs-website",
    category: "Web Apps",
    date: "22 Feb 2026",
    title: "Web app or website — which does your business actually need?",
    excerpt:
      "Both terms get thrown around constantly. Understanding the real difference helps you invest budget in the right direction.",
    gradient: "linear-gradient(145deg, #0A1828 0%, #112038 100%)",
  },
  {
    id: 5,
    slug: "seo-foundations-2026",
    category: "Strategy",
    date: "15 Feb 2026",
    title: "SEO foundations every new website must get right in 2026",
    excerpt:
      "Algorithm updates come and go, but these fundamentals have stayed consistent — and most new websites still miss half of them.",
    gradient: "linear-gradient(145deg, #0C1C2E 0%, #0A1A28 100%)",
  },
];

export default function News() {
  const swiperRef = useRef(null);

  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <div className={`${styles.head} g-container`}>
        <div className={styles.headLeft}>
          <span className={styles.label}>From the blog</span>
          <h2 className={styles.heading}>Latest updates</h2>
        </div>
        <div className={styles.headRight}>
          <Link href="/blog" className={styles.viewAll}>
            See all articles
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          {/* Arrow buttons */}
          <div className={styles.arrows}>
            <button
              className={styles.arrow}
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className={styles.arrow}
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Slider ── */}
      <div className={styles.sliderWrap}>
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          slidesPerView={3}
          spaceBetween={16}
          slidesOffsetBefore={64}
          slidesOffsetAfter={64}
          breakpoints={{
            0:   { slidesPerView: 1.15, spaceBetween: 12, slidesOffsetBefore: 20, slidesOffsetAfter: 20 },
            560: { slidesPerView: 2.1,  spaceBetween: 14, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
            900: { slidesPerView: 3,    spaceBetween: 16, slidesOffsetBefore: 64, slidesOffsetAfter: 64 },
          }}
          className={styles.swiper}
        >
          {NEWS.map((post) => (
            <SwiperSlide key={post.id} className={styles.slide}>
              <Link href={`/blog/${post.slug}`} className={styles.card}>
                {/* Image area */}
                <div className={styles.cardImage} style={{ background: post.gradient }}>
                  <span className={styles.cardTag}>{post.category}</span>
                </div>
                {/* Content */}
                <div className={styles.cardBody}>
                  <span className={styles.cardDate}>{post.date}</span>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <span className={styles.cardCta}>
                    Read more
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
