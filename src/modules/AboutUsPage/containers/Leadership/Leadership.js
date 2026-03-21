import styles from './Leadership.module.scss';
import ComponentTitle from '@/components/ComponentTitle/ComponentTitle';

const LOGOS = ['McKinsey', 'Deloitte', 'KPMG', 'PwC'];

export default function Leadership() {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>

        <div className={styles.topRow}>
          <div className={styles.headingCol}>
            <ComponentTitle label="Tanıyın" title="Rəhbərlik" size="xl" />
          </div>
        </div>

        <div className={styles.bodyRow}>
          <div className={styles.photoWrap}>
            <div className={styles.photoPlaceholder}>
              <span className={styles.photoInitials}>RF</span>
            </div>
          </div>

          <div className={styles.bioCol}>
            <p className={styles.bio}>
              Rauf, Azərbaycan və Cənubi Qafqaz regionunda on ildən artıq müddət ərzində
              strateji konsaltinq və biznes idarəetməsi sahəsində təcrübəyə malikdir.
              Maliyyə, enerji və texnologiya sektorlarında aparıcı beynəlxalq şirkətlərlə
              əldə etdiyi dərin sektoral biliyə əsaslanaraq ADHOC-u sürət, dəqiqlik və
              dürüstlük prinsipləri üzərində idarə edir.
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
