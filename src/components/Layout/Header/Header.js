"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import Link from "next/link";
import styles from "./Header.module.scss";

const LOCALES = ["az", "en", "ru"];

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: t("whatWeDo"), href: "/services" },
    { label: t("about"),    href: "/about"    },
    { label: t("work"),     href: "/works"    },
    { label: t("faq"),      href: "/faq"      },
  ];

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

  const switchLocale = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    closeMenu();
  };

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
          {t("contact")}
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
          <span className={styles.menuLabel}>{menuOpen ? t("close") : t("menu")}</span>
        </button>

      </div>

      {/* Full-screen overlay */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}>
        <div className={`${styles.overlayContent} g-container`}>
          <nav className={styles.overlayNav}>
            {[...NAV_LINKS, { label: t("contact"), href: "/contact" }].map((link, i) => (
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
              {LOCALES.map((loc, i) => (
                <span key={loc}>
                  {i > 0 && <span className={styles.overlayLangSep}>/</span>}
                  <button
                    className={locale === loc ? styles.overlayLangActive : ""}
                    onClick={() => switchLocale(loc)}
                  >
                    {loc.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
