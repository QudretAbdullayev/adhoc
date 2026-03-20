import styles from "./Marquee.module.scss";

const ITEMS = [
  "Strategy",
  "Branding",
  "UX Design",
  "Web Development",
  "E-commerce",
  "Mobile Apps",
  "SEO & Marketing",
  "Open Source",
];

export default function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
