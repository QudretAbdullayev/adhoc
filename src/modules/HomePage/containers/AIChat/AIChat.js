"use client";
import styles from "./AIChat.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

const AIChat = () => {
  return (
    <section className={styles.aichat}>
      <div className={styles.aichat__container}>
        <div className={styles.aichat__header}>
          <div className={styles.aichat__content}>
            <p className={styles.aichat__label}>AI ASSISTANT</p>

            <div className={styles.aichat__title}>
              <h2 className={styles.aichat__title__text}>
                LET&apos;S TALK OUR DOSTY AI
              </h2>
              <div className={styles.aichat__left}>
                <div className={styles.aichat__image}>
                  <SafeImage
                    fill
                    src="/home/ai/dog1.png"
                    alt="Dog with phone"
                  />
                </div>
              </div>
              <div className={styles.aichat__right}>
                <div className={styles.aichat__image}>
                  <SafeImage fill src="/home/ai/dog2.png" alt="Dalmatian dog" />
                </div>
              </div>
            </div>
          </div>

          <p className={styles.aichat__description}>
            Ask anything — from symptoms and behavior to training and nutrition.
            <br />
            Dosty&apos;s AI Assistant gives fast, reliable, pet-specific answers
            whenever you need help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
