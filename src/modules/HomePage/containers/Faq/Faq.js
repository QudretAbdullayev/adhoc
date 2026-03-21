"use client";

import { useState } from "react";
import styles from "./Faq.module.scss";

const ITEMS = [
  {
    q: "ADHOC hansı sahələrdə xidmət göstərir?",
    a: "Biz maliyyə, enerji, istehsal, texnologiya və xidmət sektorlarında strateji konsaltinq, biznes analizi və idarəetmə məsləhəti xidmətləri göstəririk. Hər sahə üzrə dərin sektoral biliyimiz var.",
  },
  {
    q: "Tipik bir layihə nə qədər davam edir?",
    a: "Əhatə dairəsindən asılı olaraq dəyişir. Qısa müddətli strateji qiymətləndirmə 2–4 həftə, tam miqyaslı transformasiya layihəsi isə 3–9 ay çəkə bilər. İlk görüşdə sizə dəqiq qrafik təqdim edirik.",
  },
  {
    q: "Azərbaycandan kənar müştərilərlə işləyirsiniz?",
    a: "Bəli — Körfəz ölkələri, Mərkəzi Asiya, Türkiyə və Avropada müştərilərimiz var. Prosesimiz uzaqdan əməkdaşlığa tam uyğunlaşdırılıb, saat fərqi heç vaxt maneə yaratmır.",
  },
  {
    q: "İş prosesiniz necə görünür?",
    a: "Kəşfiyyat mərhələsindən başlayırıq — mövcud vəziyyəti, hədəfləri və çətinlikləri dərindən öyrənirik. Sonra analiz, tövsiyə paketi, tətbiq planı və nəticələrin monitorinqi gəlir. Hər mərhələdə şəffaf hesabat veririk.",
  },
  {
    q: "Mövcud bir iş prosesini audit edə bilərsiniz?",
    a: "Bəli. Artıq fəaliyyət göstərən iş proseslərini, maliyyə modellərini və ya idarəetmə strukturlarını müstəqil olaraq qiymətləndiririk, ətraflı audit hesabatı hazırlayırıq.",
  },
  {
    q: "Necə başlamaq olar?",
    a: "Əlaqə forması vasitəsilə və ya e-poçtla bizə qısa layihə icmalı göndərin. Əhatə, qrafik və uyğunluq barədə danışmaq üçün qısa görüş planlaşdırırıq — pulsuz ilkin konsultasiya.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      <div className="g-container">
        <div className={styles.bottomBar}>
          <h2 className={styles.bottomTitle}>Tez-tez soruşulan suallar.</h2>
        </div>

        <ul className={styles.list}>
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={i} className={styles.item}>
                <button
                  className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.triggerText}>{item.q}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ""}`}>
                  <div className={styles.bodyInner}>
                    <p className={styles.answer}>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
