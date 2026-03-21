import Link from "next/link";
import Image from "next/image";
import styles from "./PostHeader.module.scss";

export default function PostHeader({ category, date, title, lead, coverImage }) {
  return (
    <header className={styles.header}>
      {/* Meta row — category + date */}
      <div className={styles.meta}>
        <Link href={`/blog/category/${category.slug}`} className={styles.tag}>
          {category.label}
        </Link>
        <time className={styles.date}>{date}</time>
      </div>

      {/* Title */}
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>

      {/* Cover image */}
      {coverImage && (
        <div className={styles.cover}>
          <Image
            src={coverImage}
            alt={title}
            fill
            className={styles.coverImg}
            priority
          />
        </div>
      )}

      {/* Placeholder when no image */}
      {!coverImage && (
        <div className={styles.coverPlaceholder} aria-hidden="true" />
      )}
    </header>
  );
}
