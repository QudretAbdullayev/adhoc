"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./Blog.module.scss";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";
import BlogCard from "@/components/BlogCard/BlogCard";
import { BLOG_POSTS } from "@/modules/BlogPage/data/blogPosts";

const SLIDER_POSTS = BLOG_POSTS.slice(0, 6);

export default function Blog() {
  const t = useTranslations("BlogSlider");

  return (
    <section className={styles.section}>
      <div className={`${styles.header} g-container`}>
        <ComponentTitle title={t("heading")} size="lg" />
        <Link href="/blog" className={styles.viewAll}>
          {t("viewAll")}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
            <path d="M1 4H11M11 4L8.25 6.75M11 4L8.25 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <div className={styles.sliderWrap}>
        <Swiper
          className={styles.swiper}
          slidesPerView={1.1}
          spaceBetween={16}
          grabCursor
          breakpoints={{
            640:  { slidesPerView: 1.8, spaceBetween: 20 },
            900:  { slidesPerView: 2.4, spaceBetween: 20 },
            1200: { slidesPerView: 3.2, spaceBetween: 24 },
          }}
        >
          {SLIDER_POSTS.map((post) => (
            <SwiperSlide key={post.id} className={styles.slide}>
              <BlogCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
