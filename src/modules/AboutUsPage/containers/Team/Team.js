import Link from 'next/link';
import styles from './Team.module.scss';

const TEAM = [
  { name: 'Rauf',    role: 'Qurucu & İcraçı Direktor'  },
  { name: 'Aysel',   role: 'Strateji Direktor'          },
  { name: 'Murad',   role: 'Baş Analitik'               },
  { name: 'Leyla',   role: 'Biznes Məsləhətçisi'        },
  { name: 'Kamran',  role: 'Maliyyə Analitiki'          },
  { name: 'Nigar',   role: 'Layihə Meneceri'            },
  { name: 'Elvin',   role: 'Risk Analitiki'             },
  { name: 'Sevinc',  role: 'Əməliyyat Meneceri'         },
  { name: 'Tural',   role: 'Texnologiya Məsləhətçisi'   },
  { name: 'Günay',   role: 'İnsan Resursları'           },
  { name: 'Anar',    role: 'Marketinq Direktoru'        },
  { name: 'Xədicə',  role: 'Müştəri Əlaqələri'         },
];

function getInitials(name) {
  return name.slice(0, 2).toUpperCase();
}

export default function Team() {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>

        <div className={styles.topRow}>
          <div className={styles.headingCol}>
            <div className={styles.headingGroup}>
              <span className={styles.eyebrow}>Komanda</span>
              <h2 className={styles.heading}>Mütəxəssislərimiz</h2>
            </div>
            <Link href="/karyera" className={styles.joinBtn}>
              Komandaya qoşul
            </Link>
          </div>

          <div className={styles.descCol}>
            <p className={styles.desc}>
              Müxtəlif sektorlarda dərin təcrübəyə malik mütəxəssislərdən ibarət komandamız
              analitik düşüncə tərzi və praktik yanaşmanın vəhdəti ilə hər bir çətinliyə
              uyğun həll tapır. Hər layihəni özünəməxsusluğu ilə qəbul edir, müştərimizin
              uğurunu öz uğurumuz sayırıq.
            </p>
            <div className={styles.hiringBadge}>
              <span className={styles.hiringDot} />
              <span className={styles.hiringText}>İş yeri var!</span>
            </div>
          </div>
        </div>

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
