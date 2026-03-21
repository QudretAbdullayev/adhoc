"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./PostSidebar.module.scss";

// ─── SHARE ICONS ─────────────────────────────────────────────────────────────

function IconFacebook() {
  return (
    <svg viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058"
        fill="currentColor"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
      <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
    </svg>
  );
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function PostSidebar({ author, related, title, slug }) {
  const pageUrl = typeof window !== "undefined"
    ? window.location.href
    : `https://adhoc.az/blog/${slug}`;

  const encoded = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      icon: <IconFacebook />,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}%20-%20${encoded}`,
      icon: <IconX />,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encoded}&title=${encodedTitle}`,
      icon: <IconLinkedIn />,
    },
  ];

  return (
    <aside className={styles.aside}>
      <div className={styles.inner}>

        {/* ── Share pill ── */}
        <div className={styles.sharePill}>
          <span className={styles.shareLabel}>Share:</span>
          <ul className={styles.shareList}>
            {shareLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareBtn}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Posted by ── */}
        <div className={styles.authorBlock}>
          <p className={styles.sectionLabel}>Posted by</p>
          <div className={styles.authorRow}>
            <div className={styles.avatar}>
              {author.avatar ? (
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className={styles.avatarImg}
                />
              ) : (
                <span className={styles.avatarInitials}>{author.initials}</span>
              )}
            </div>
            <span className={styles.authorName}>{author.name}</span>
          </div>
        </div>

        {/* ── Related reading ── */}
        {related?.length > 0 && (
          <div className={styles.relatedBlock}>
            <p className={styles.sectionLabel}>Related reading</p>
            <ul className={styles.relatedList}>
              {related.map((item) => (
                <li key={item.slug} className={styles.relatedItem}>
                  <Link href={`/blog/${item.slug}`} className={styles.relatedLink}>
                    <h3 className={styles.relatedTitle}>{item.title}</h3>
                    {item.date && (
                      <time className={styles.relatedDate}>{item.date}</time>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </aside>
  );
}
