import VideoStatic from '../../../../components/VideoStatic/VideoStatic';
import styles from './PetCareTips.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const PetCareTips = () => {
  const tips = [
    {
      id: 1,
      overline: "Overline title",
      title: "Healthy Feeding Habits",
      video: "/home/converted-1.mp4",
    },
    {
      id: 2,
      overline: "Overline title",
      title: "How to Read Your Pet's Body Language",
      video: "/home/converted-2.mp4",
    },
    {
      id: 3,
      overline: "Overline title",
      title: "Vaccine & Health Routine 101",
      video: "/home/converted-3.mp4",
    },
    {
      id: 4,
      overline: "Overline title",
      title: "Keep Those Nails Short & Safe",
      video: "/home/converted-4.mp4",
    }
  ];

  return (
    <section className={`${styles.tips} g-container`}>
      <div className={styles.tips__header}>
        <p className={styles.tips__label}>short, smart pet care tips</p>
        <h2 className={styles.tips__title}>Learn from the experts</h2>
      </div>

      <div className={styles.tips__grid}>
        <Swiper
          centeredSlides={false}
          slidesPerView="auto"
          breakpoints={{
            700: {
              enabled: false,
            }
          }}
          className={styles.tips__swiper}
        >
          {tips.map((tip) => (
            <SwiperSlide key={tip.id} className={styles.tips__slide}>
              <div className={styles.tips__card}>
                <VideoStatic src={tip.video} alt={tip.title} />
                <div className={styles.tips__card__overlay} />
                <div className={styles.tips__card__content}>
                  <p className={styles.tips__card__subtitle}>{tip.overline}</p>
                  <h3 className={styles.tips__card__title}>{tip.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PetCareTips;