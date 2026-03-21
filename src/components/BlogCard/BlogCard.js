import Link from "next/link";
import styles from "./BlogCard.module.scss";

export default function BlogCard({ post }) {
  const { slug, category, date, title, excerpt, coverGradient } = post;

  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      {/* Cover */}
      <div className={styles.cover} style={{ background: coverGradient }}>
        <span
          className={styles.category}
          style={{
            color: category.color,
            background: `${category.color}18`,
            borderColor: `${category.color}35`,
          }}
        >
          {category.label}
        </span>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <time className={styles.date}>{date}</time>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <span className={styles.arrow}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}
