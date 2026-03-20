import Link from "next/link";
import styles from "./Footer.module.scss";

const NAV_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const NAV_SERVICES = [
  { label: "Websites", href: "/services/websites" },
  { label: "Web Applications", href: "/services/web-apps" },
  { label: "UI/UX Design", href: "/services/design" },
  { label: "Branding", href: "/services/branding" },
  { label: "Strategy", href: "/services/strategy" },
];

const NAV_MORE = [
  { label: "Our Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── TOP BAR — wordmark | contact | socials ── */}
      <div className={`${styles.topBar} g-container`}>

        <span className={styles.wordmark}>ADHOC.</span>

        <div className={styles.contactRow}>
          <a href="tel:+994501234567" className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.39 16z" />
              </svg>
            </span>
            +994 50 123 45 67
          </a>
          <span className={styles.contactDivider} />
          <a href="mailto:hello@adhoc.az" className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            hello@adhoc.az
          </a>
          <span className={styles.contactDivider} />
          <span className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            Baku, Azerbaijan
          </span>
        </div>

        <div className={styles.socials}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="LinkedIn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

      </div>

      {/* ── CARDS ROW ── */}
      <div className={`${styles.cardsRow} g-container`}>

        {/* Left card — 3 nav columns */}
        <div className={styles.cardLeft}>
          <div className={styles.navCol}>
            <span className={styles.navHeading}>Company</span>
            <ul className={styles.navList}>
              {NAV_COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navCol}>
            <span className={styles.navHeading}>Services</span>
            <ul className={styles.navList}>
              {NAV_SERVICES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navCol}>
            <span className={styles.navHeading}>Explore</span>
            <ul className={styles.navList}>
              {NAV_MORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right card — CTA */}
        <div className={styles.cardRight}>
          <p className={styles.ctaEyebrow}>Ready to build?</p>
          <h2 className={styles.ctaHeading} aria-label="Let's talk">
            <span>LETS</span>
            <span>TALK</span>
          </h2>
          <p className={styles.ctaText}>
            Have an idea in mind? Tell us what you&apos;re building — we&apos;ll help make it happen.
          </p>
          <a href="/contact" className={styles.ctaBtn}>
            Start a project
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>

      {/* ── BOTTOM BAR — copyright | legal | lang ── */}
      <div className={`${styles.bottomBar} g-container`}>
        <span className={styles.copy}>
          ©{new Date().getFullYear()} ADHOC. All rights reserved.
        </span>
        <nav className={styles.legal}>
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.legalLink}>
              {l.label}
            </Link>
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
