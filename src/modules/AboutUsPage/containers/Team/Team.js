import Link from 'next/link';
import styles from './Team.module.scss';

const TEAM = [
  { name: 'Rauf',    role: 'Founder & CEO' },
  { name: 'Aysel',   role: 'Design Lead' },
  { name: 'Murad',   role: 'Product Designer' },
  { name: 'Leyla',   role: 'UI/UX Designer' },
  { name: 'Kamran',  role: 'Front-End Developer' },
  { name: 'Nigar',   role: 'Project Manager' },
  { name: 'Elvin',   role: 'Visual Designer' },
  { name: 'Sevinc',  role: 'UX Researcher' },
  { name: 'Tural',   role: 'Full-Stack Developer' },
  { name: 'Günay',   role: 'Brand Strategist' },
  { name: 'Anar',    role: 'Motion Designer' },
  { name: 'Xədicə',  role: 'Operations Manager' },
];

function getInitials(name) {
  return name.slice(0, 2).toUpperCase();
}

export default function Team() {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>

        {/* ── Top row: heading + description ── */}
        <div className={styles.topRow}>

          <div className={styles.headingCol}>
            <div className={styles.headingGroup}>
              <span className={styles.eyebrow}>Team</span>
              <h2 className={styles.heading}>Our Design Experts</h2>
            </div>
            <Link href="/careers" className={styles.joinBtn}>
              Join the team
            </Link>
          </div>

          <div className={styles.descCol}>
            <p className={styles.desc}>
              We work with best-in-class designers and developers, adept at conquering
              diverse challenges. With a blend of creativity and technical proficiency,
              our team navigates complexities in UX/UI design, branding, and engineering.
              Collaborative and innovative, we transform ideas into visually striking
              solutions — ensuring every project exceeds expectations.
            </p>
            <div className={styles.hiringBadge}>
              <span className={styles.hiringDot} />
              <span className={styles.hiringText}>We're hiring!</span>
            </div>
          </div>

        </div>

        {/* ── Team grid ── */}
        <div className={styles.grid}>
          {TEAM.map((member) => (
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
