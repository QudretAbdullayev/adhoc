"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./ContactForm.module.scss";
import ComponentTitle from "@/components/ComponentTitle/ComponentTitle";

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ContactForm() {
  const t = useTranslations("ContactForm");

  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  const TRUST = [t("trust1"), t("trust2"), t("trust3")];

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} g-container`}>

        {/* ── Left ── */}
        <div className={styles.left}>
          <ComponentTitle label={t("label")} title={t("title")} size="lg" />
          <p className={styles.desc}>{t("desc")}</p>
          <ul className={styles.trust}>
            {TRUST.map((item) => (
              <li key={item} className={styles.trustItem}>
                <span className={styles.trustIcon}><IconCheck /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right — form card ── */}
        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p className={styles.successTitle}>{t("successTitle")}</p>
              <p className={styles.successDesc}>{t("successDesc")}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input
                  className={styles.field}
                  type="text"
                  name="name"
                  placeholder={t("namePlaceholder")}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className={styles.field}
                  type="text"
                  name="company"
                  placeholder={t("companyPlaceholder")}
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <input
                className={styles.field}
                type="email"
                name="email"
                placeholder={t("emailPlaceholder")}
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className={`${styles.field} ${styles.textarea}`}
                name="message"
                placeholder={t("messagePlaceholder")}
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
              <button type="submit" className={styles.submit}>
                {t("submit")}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
