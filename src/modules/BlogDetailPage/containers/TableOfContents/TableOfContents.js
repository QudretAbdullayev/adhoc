"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./TableOfContents.module.scss";

export default function TableOfContents({ items }) {
  const t = useTranslations("TableOfContents");
  const [activeId, setActiveId] = useState(items[0]?.id ?? null);

  useEffect(() => {
    const headings = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <aside className={styles.aside}>
      <h3 className={styles.heading}>{t("heading")}</h3>
      <nav>
        <ol className={styles.list}>
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
              >
                <a
                  href={`#${item.id}`}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                  onClick={(e) => handleClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}
