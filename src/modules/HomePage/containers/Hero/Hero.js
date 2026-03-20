import styles from "./Hero.module.scss";
import Paw from "@/assets/icons/home/Paw";
import VideoStatic from "@/components/VideoStatic/VideoStatic";
import Dog from "@/assets/icons/home/Dog";
import StoreLinks from "@/components/StoreLinks/StoreLinks";

export default function Hero() {
  return (
    <section id="home-hero" className={`${styles.hero} hero-container`}>
      <VideoStatic src="/home/hero/background.mp4" />

      <div className={styles.hero__content}>
        <div className={styles.hero__left}>
          <div className={styles.hero__heading}>
            <span className={styles.hero__icon}>
              <Dog />
            </span>
            <span className={styles.hero__tagline}>
              #1{"\n"}
              DOG, CAT AND ETC.
            </span>
            <h1 className={styles.hero__title}>
              <div>EVERYTHING</div>
              <div>YOUR PET</div>
              <div>NEEDS</div>
            </h1>
          </div>
        </div>
        <div className={styles.hero__right}>
          <p className={styles.hero__description}>
            Keep your furry friend healthy and happy with one smart app. Track
            vaccines, plan meals, get expert tips, and enjoy.
          </p>

          <StoreLinks />
        </div>
      </div>

      <div className={styles.hero__scroll}>
        <div className={styles.hero__scroll__icon}>
          <Paw />
        </div>
        <span className={styles.hero__scroll__text}>Scroll to discover</span>
      </div>
    </section>
  );
}