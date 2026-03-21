"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const NAV_COMPANY = [
  { label: "About",   href: "/about" },
  { label: "Work",    href: "/works" },
  { label: "Blog",    href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const NAV_SERVICES = [
  { label: "Websites",         href: "/services/websites" },
  { label: "Web Applications", href: "/services/web-apps" },
  { label: "UI/UX Design",     href: "/services/design" },
  { label: "Branding",         href: "/services/branding" },
  { label: "Strategy",         href: "/services/strategy" },
];

const NAV_MORE = [
  { label: "Our Process", href: "/process" },
  { label: "Pricing",     href: "/pricing" },
  { label: "Careers",     href: "/careers" },
  { label: "FAQ",         href: "/faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer",     href: "/disclaimer" },
  { label: "Cookies",        href: "/cookies" },
];

// ─── ICONS ────────────────────────────────────────────────────────────────────

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

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className={styles.footer}>

      {/* ── TOP BAR — wordmark | contacts | socials ── */}
      <div className={`${styles.topBar} g-container`}>

        <Link href="/" className={styles.wordmark}>ADHOC.</Link>

        <div className={styles.contactRow}>
          <a href="tel:+994501234567" className={styles.contactItem}>
            <span className={styles.contactIcon}><IconPhone /></span>
            +994 50 123 45 67
          </a>
          <a href="mailto:hello@adhoc.az" className={styles.contactItem}>
            <span className={styles.contactIcon}><IconMail /></span>
            hello@adhoc.az
          </a>
          <span className={styles.contactItem}>
            <span className={styles.contactIcon}><IconLocation /></span>
            Baku, Azerbaijan
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
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Behance">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.543c-.063-1.337-.61-2.245-1.731-2.245-1.23 0-1.72.91-1.812 2.245zM7.491 11.618c.963-.344 1.497-1.126 1.497-2.251 0-2.076-1.504-3.367-3.848-3.367H0v14h5.501c2.983 0 4.875-1.388 4.875-3.934 0-1.546-.747-2.724-2.885-2.448zM3 8.5h1.5c.948 0 1.531.54 1.531 1.35s-.583 1.35-1.531 1.35H3V8.5zm2.5 7.5H3v-3h2.5c1.118 0 1.754.591 1.754 1.5 0 .954-.636 1.5-1.754 1.5z" />
            </svg>
          </a>
        </div>

      </div>

      {/* ── BODY — nav card + newsletter card ── */}
      <div className={`${styles.body} g-container`}>

        {/* Left — nav columns card */}
        <div className={styles.cardNav}>
          <div className={styles.navCol}>
            <h3 className={styles.navHeading}>Company</h3>
            <ul className={styles.navList}>
              {NAV_COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navCol}>
            <h3 className={styles.navHeading}>Services</h3>
            <ul className={styles.navList}>
              {NAV_SERVICES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navCol}>
            <h3 className={styles.navHeading}>Explore</h3>
            <ul className={styles.navList}>
              {NAV_MORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — newsletter card */}
        <div className={styles.cardNewsletter}>
          {subscribed ? (
            <div className={styles.successState}>
              <span className={styles.successIcon}>✓</span>
              <p className={styles.successText}>Thank you for subscribing!</p>
            </div>
          ) : (
            <>
              <h3 className={styles.newsHeading}>
                Stay up to date on everything digital
              </h3>
              <form className={styles.newsForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.newsBtn}>
                  Subscribe
                </button>
              </form>
              <p className={styles.newsNote}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
              </p>
            </>
          )}
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={`${styles.bottomBar} g-container`}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} ADHOC. All rights reserved.
        </span>
        <nav className={styles.legal}>
          {LEGAL_LINKS.map((l, i) => (
            <>
              {i > 0 && <span key={`sep-${l.href}`} className={styles.legalSep} />}
              <Link key={l.href} href={l.href} className={styles.legalLink}>
                {l.label}
              </Link>
            </>
          ))}
          <span className={styles.legalSep} />
          <span className={styles.lang}>
            <span className={styles.langItem}>EN</span>
            <span className={styles.langSep}>/</span>
            <span className={styles.langItem}>AZ</span>
          </span>
        </nav>
      </div>

    </footer>
  );
}
