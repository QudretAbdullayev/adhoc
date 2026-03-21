"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

const NAV_COMPANY = [
  { label: "Haqqımızda", href: "/about-us" },
  { label: "Bloq",       href: "/blog"     },
  { label: "Əlaqə",      href: "/contact"  },
  { label: "Karyera",    href: "/careers"  },
];

const NAV_SERVICES = [
  { label: "Hüquqi Konsaltinq", href: "/services/legal"           },
  { label: "İnsan Resursları",  href: "/services/human-resources" },
  { label: "Mühasibatlıq",      href: "/services/accounting"      },
];

const NAV_MORE = [
  { label: "Məxfilik Siyasəti", href: "/privacy" },
  { label: "Şərtlər",           href: "/terms"   },
  { label: "FAQ",                href: "/faq"     },
];

const LANGS = [
  { code: "AZ", label: "Azərbaycan dili" },
  { code: "EN", label: "English"         },
  { code: "RU", label: "Русский"         },
];

function IconPhone() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.39 16z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Socials() {
  return (
    <div className={styles.socials}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeLang, setActiveLang] = useState("AZ");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <footer className={styles.footer}>

      {/* ── Top bar ── */}
      <div className={`${styles.topBar} g-container`}>
        <Link href="/" className={styles.wordmark}>ADHOC.AZ</Link>

        <div className={styles.contactRow}>
          <a href="tel:+994501234567" className={styles.contactItem}>
            <span className={styles.contactIcon}><IconPhone /></span>
            +994 50 123 45 67
          </a>
          <a href="mailto:info@adhoc.az" className={styles.contactItem}>
            <span className={styles.contactIcon}><IconMail /></span>
            info@adhoc.az
          </a>
          <span className={styles.contactItem}>
            <span className={styles.contactIcon}><IconLocation /></span>
            Bakı, Azərbaycan
          </span>
        </div>

        {/* Language dropdown */}
        <div className={styles.langSelector} ref={langRef}>
          <button
            className={`${styles.langTrigger} ${langOpen ? styles.langTriggerOpen : ""}`}
            onClick={() => setLangOpen((v) => !v)}
          >
            {activeLang}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {langOpen && (
            <ul className={styles.langDropdown}>
              {LANGS.map((l) => (
                <li key={l.code}>
                  <button
                    className={`${styles.langOption} ${activeLang === l.code ? styles.langOptionActive : ""}`}
                    onClick={() => { setActiveLang(l.code); setLangOpen(false); }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className={`${styles.body} g-container`}>
        <div className={styles.cardNav}>
          <div className={styles.navCol}>
            <h3 className={styles.navHeading}>Şirkət</h3>
            <ul className={styles.navList}>
              {NAV_COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navCol}>
            <h3 className={styles.navHeading}>Xidmətlər</h3>
            <ul className={styles.navList}>
              {NAV_SERVICES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navCol}>
            <h3 className={styles.navHeading}>Kəşf et</h3>
            <ul className={styles.navList}>
              {NAV_MORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter card with socials inside */}
        <div className={styles.cardNewsletter}>
          {subscribed ? (
            <div className={styles.successState}>
              <span className={styles.successIcon}>✓</span>
              <p className={styles.successText}>Abunəliyiniz üçün təşəkkür edirik!</p>
            </div>
          ) : (
            <>
              <h3 className={styles.newsHeading}>Bütün yeniliklərdən xəbərdar olun</h3>
              <form className={styles.newsForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="E-poçt ünvanınız"
                  className={styles.newsInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.newsBtn}>Abunə ol</button>
              </form>
              <p className={styles.newsNote}>
                Abunə olmaqla Gizlilik Siyasətimizə razılıq verirsiniz.
              </p>
            </>
          )}
          <Socials />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={`${styles.bottomBar} g-container`}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} ADHOC. Bütün hüquqlar qorunur.
        </span>
        <span className={styles.credit}>
          Designed by{" "}
          <a href="https://venera.az" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>
            Venera.az
          </a>
        </span>
      </div>

    </footer>
  );
}
