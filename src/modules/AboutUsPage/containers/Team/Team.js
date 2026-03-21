import { getTranslations } from "next-intl/server";
import Link from 'next/link';
import styles from './Team.module.scss';
import ComponentTitle from '@/components/ComponentTitle/ComponentTitle';

function getInitials(name) {
  return name.slice(0, 2).toUpperCase();
}

export default async function Team() {
  const t = await getTranslations("Team");
  const members = t.raw("members");

  return (
    <div className={styles.root}>
      <div className={styles.inner}>

        <div className={styles.topRow}>
          <div className={styles.headingCol}>
            <ComponentTitle label={t("label")} title={t("title")} size="xl" />
            <Link href="/karyera" className={styles.joinBtn}>
              {t("joinBtn")}
            </Link>
          </div>

          <div className={styles.descCol}>
            <p className={styles.desc}>{t("desc")}</p>
            <div className={styles.hiringBadge}>
              <span className={styles.hiringDot} />
              <span className={styles.hiringText}>{t("hiring")}</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {members.map((member) => (
            <div key={member.name} className={styles.card}>
              <div className={styles.cardPhoto}>
                <span className={styles.cardInitials}>{getInitials(member.name)}</span>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardName}>{member.name}</span>
                <span className={styles.cardRole}>{member.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
