import styles from './Leadership.module.scss';

const LOGOS = ['Microsoft', 'LinkedIn', 'Booking.com', 'Google'];

export default function Leadership() {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>

        {/* ── Top row: heading left ── */}
        <div className={styles.topRow}>
          <div className={styles.headingCol}>
            <span className={styles.eyebrow}>Meet</span>
            <h2 className={styles.heading}>The Leadership</h2>
          </div>
        </div>

        {/* ── Bottom row: photo | bio + logos ── */}
        <div className={styles.bodyRow}>

          <div className={styles.photoWrap}>
            <div className={styles.photoPlaceholder}>
              <span className={styles.photoInitials}>RF</span>
            </div>
          </div>

          <div className={styles.bioCol}>
            <p className={styles.bio}>
              Rauf has over a decade of experience building digital products and brands across
              Azerbaijan and the broader Caucasus region. With a background spanning design and
              technology, he leads ADHOC with a focus on purposeful digital experiences — from
              brand identities to full-scale web applications. Drawing on work with international
              clients, he guides the team to ship with speed, craft, and intelligence.
            </p>
            <div className={styles.logos}>
              {LOGOS.map((l) => (
                <span key={l} className={styles.logo}>{l}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
