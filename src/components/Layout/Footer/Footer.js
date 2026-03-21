"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

const NAV_COMPANY = [
  { label: "Haqqımızda", href: "/haqqimizda" },
  { label: "İşlər",      href: "/isler"       },
  { label: "Bloq",       href: "/bloq"         },
  { label: "Əlaqə",      href: "/elaqe"        },
];

const NAV_SERVICES = [
  { label: "Strateji Konsaltinq",   href: "/xidmetler/strategiya"  },
  { label: "Biznes Analizi",        href: "/xidmetler/analiz"      },
  { label: "İdarəetmə Məsləhəti",   href: "/xidmetler/idaeetme"    },
  { label: "Maliyyə Planlaması",    href: "/xidmetler/maliyye"     },
  { label: "Risk İdarəetməsi",      href: "/xidmetler/risk"        },
];

const NAV_MORE = [
  { label: "Prosesimiz", href: "/proses"   },
  { label: "Qiymətlər",  href: "/qiymetler"},
  { label: "Karyera",    href: "/karyera"  },
  { label: "FAQ",        href: "/faq"      },
];

const LEGAL_LINKS = [
  { label: "Gizlilik Siyasəti", href: "/gizlilik" },
  { label: "İmtina",            href: "/imtina"    },
  { label: "Cookies",           href: "/cookies"   },
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

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className={styles.footer}>

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
      </div>

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

        <div className={styles.cardNewsletter}>
          {subscribed ? (
            <div className={styles.successState}>
              <span className={styles.successIcon}>✓</span>
              <p className={styles.successText}>Abunəliyiniz üçün təşəkkür edirik!</p>
            </div>
          ) : (
            <>
              <h3 className={styles.newsHeading}>
                Bütün yeniliklərdən xəbərdar olun
              </h3>
              <form className={styles.newsForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="E-poçt ünvanınız"
                  className={styles.newsInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.newsBtn}>
                  Abunə ol
                </button>
              </form>
              <p className={styles.newsNote}>
                Abunə olmaqla Gizlilik Siyasətimizə razılıq verirsiniz.
              </p>
            </>
          )}
        </div>
      </div>

      <div className={`${styles.bottomBar} g-container`}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} ADHOC. Bütün hüquqlar qorunur.
        </span>
        <nav className={styles.legal}>
          {LEGAL_LINKS.map((l, i) => (
            <Fragment key={l.href}>
              {i > 0 && <span className={styles.legalSep} />}
              <Link href={l.href} className={styles.legalLink}>{l.label}</Link>
            </Fragment>
          ))}
          <span className={styles.legalSep} />
          <span className={styles.lang}>
            <span className={styles.langItem}>AZ</span>
            <span className={styles.langSep}>/</span>
            <span className={styles.langItem}>EN</span>
          </span>
        </nav>
      </div>

    </footer>
  );
}
