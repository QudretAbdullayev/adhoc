import { getTranslations } from "next-intl/server";
import Link from "next/link";
import styles from "./BlogPage.module.scss";
import BlogCard from "@/components/BlogCard/BlogCard";
import { BLOG_POSTS } from "./data/blogPosts";

const POSTS_PER_PAGE = 6;

function Pagination({ currentPage, totalPages, prevLabel, nextLabel }) {
  return (
    <div className={styles.pagination}>
      {currentPage > 1 ? (
        <Link href={`?page=${currentPage - 1}`} className={styles.pageArrow}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M15 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {prevLabel}
        </Link>
      ) : (
        <span className={`${styles.pageArrow} ${styles.pageArrowDisabled}`}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M15 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {prevLabel}
        </span>
      )}

      <div className={styles.pageNums}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <Link
            key={p}
            href={`?page=${p}`}
            className={`${styles.pageNum} ${currentPage === p ? styles.pageNumActive : ""}`}
          >
            {p}
          </Link>
        ))}
      </div>

      {currentPage < totalPages ? (
        <Link href={`?page=${currentPage + 1}`} className={styles.pageArrow}>
          {nextLabel}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      ) : (
        <span className={`${styles.pageArrow} ${styles.pageArrowDisabled}`}>
          {nextLabel}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </div>
  );
}

export default async function BlogPage({ page = 1 }) {
  const t = await getTranslations("BlogPage");

  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const currentPosts = BLOG_POSTS.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className={styles.root}>

      {/* ── Page header ── */}
      <div className={styles.pageHeader}>
        <div className={`${styles.pageHeaderInner} g-container`}>
          <h1 className={styles.heading}>{t("heading")}</h1>
          <p className={styles.desc}>{t("desc")}</p>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className={`${styles.gridWrap} g-container`}>
        <div className={styles.grid}>
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            prevLabel={t("prev")}
            nextLabel={t("next")}
          />
        )}
      </div>

    </div>
  );
}
