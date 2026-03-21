"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "What we do", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "FAQ", href: "/faq" },
];

export default function Header({ locale = "en" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Logo — in normal page flow, scrolls with page */}
      <header className={styles.header}>
        <div className={`${styles.inner} g-container`}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            adhoc<span className={styles.logoDot}>.</span>az
          </Link>
        </div>
      </header>

      {/* Fixed nav pill — always top-right */}
      <div className={`${styles.navFixed} ${scrolled ? styles.scrolled : ""}`}>

        {/* Nav links — visible by default, collapse on scroll */}
        <nav className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact button — always visible */}
        <Link href="/contact" className={styles.contactBtn} onClick={closeMenu}>
          Contact
        </Link>

        {/* Menu button — hidden by default, slides in on scroll */}
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnActive : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}>
            <span />
            <span />
          </span>
          <span className={styles.menuLabel}>{menuOpen ? "Close" : "Menu"}</span>
        </button>

      </div>

      {/* Full-screen overlay */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}>
        <div className={`${styles.overlayContent} g-container`}>
          <nav className={styles.overlayNav}>
            {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.overlayLink}
                style={{ "--i": i }}
                onClick={closeMenu}
              >
                <span className={styles.overlayLinkNum}>0{i + 1}</span>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.overlayBottom}>
            <a href="mailto:hello@adhoc.az" className={styles.overlayEmail}>
              hello@adhoc.az
            </a>
            <div className={styles.overlayLang}>
              <span className={locale === "en" ? styles.overlayLangActive : ""}>EN</span>
              <span className={styles.overlayLangSep}>/</span>
              <span className={locale === "az" ? styles.overlayLangActive : ""}>AZ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
