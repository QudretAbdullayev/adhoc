import { getTranslations } from "next-intl/server";
import styles from './Leadership.module.scss';
import ComponentTitle from '@/components/ComponentTitle/ComponentTitle';

const LOGOS = ['McKinsey', 'Deloitte', 'KPMG', 'PwC'];

export default async function Leadership() {
  const t = await getTranslations("Leadership");

  return (
    <div className={styles.root}>
      <div className={styles.inner}>

        <div className={styles.topRow}>
          <div className={styles.headingCol}>
            <ComponentTitle label={t("label")} title={t("title")} size="xl" />
          </div>
        </div>

        <div className={styles.bodyRow}>
          <div className={styles.photoWrap}>
            <div className={styles.photoPlaceholder}>
              <span className={styles.photoInitials}>RF</span>
            </div>
          </div>

          <div className={styles.bioCol}>
            <p className={styles.bio}>{t("bio")}</p>
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
