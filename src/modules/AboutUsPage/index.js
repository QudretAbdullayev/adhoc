import styles from './AboutUsPage.module.scss';
import Leadership from './containers/Leadership/Leadership';
import Team from './containers/Team/Team';

export default function AboutUsPage() {
  return (
    <section className={styles.section}>
      <Leadership />
      <Team />
    </section>
  );
}
