import Link from "next/link";
import styles from "./Footer.module.scss";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookies", href: "/cookies" },
  { label: "Community", href: "/community" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── LAVENDER CARD ── */}
      <div className={styles.cardWrap}>
        <div className={styles.card}>

          {/* Column 1 — Contact label (top-left) */}
          <div className={styles.colLabel}>
            <span className={styles.cardLabel}>Contact</span>
          </div>

          {/* Column 2 — Phone + Email (centered) */}
          <div className={styles.colContact}>
            <a href="tel:+994501234567" className={styles.contactItem}>
              +994 50 123 45 67
            </a>
            <a href="mailto:hello@adhoc.az" className={styles.contactItem}>
              hello@adhoc.az
            </a>
          </div>

          {/* Column 3 — Social buttons (top-right) */}
          <div className={styles.colSocials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Column 4 — Language switcher (bottom-left, inside card) */}
          <div className={styles.colLang}>
            <span className={styles.langItem}>EN</span>
            <span className={styles.langSep}>/</span>
            <span className={styles.langItem}>AZ</span>
          </div>

          {/* LETS TALK — absolute at card bottom, overflows */}
          <div className={styles.bigTextWrap} aria-hidden="true">
            <span className={styles.bigText}>LETS TALK</span>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR — legal + copyright only ── */}
      <div className={styles.bottomBar}>
        <nav className={styles.legal}>
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.legalLink}>
              {l.label}
            </Link>
          ))}
        </nav>
        <span className={styles.copy}>
          ©{new Date().getFullYear()} ADHOC.
        </span>
      </div>

    </footer>
  );
}
