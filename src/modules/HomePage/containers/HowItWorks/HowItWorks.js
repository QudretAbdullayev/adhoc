'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './HowItWorks.module.scss';
import SafeImage from '@/components/SafeImage/SafeImage';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('puppy');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        const tabs = ['puppy', 'adult', 'senior'];
        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [activeTab]);

  const stages = {
    puppy: {
      title: `Building strong,\nhealthy beginnings`,
      problem: {
        label: "Problem",
        text: "Newborns need the right start.Dost helps you track colostrum intake, early crawling milestones, and introduces gentle handling cues to boost confidence."
      },
      solution: {
        label: "Solution",
        text: `"I'm not sure how often to feed my newborn pup." → Dost sets reminders and feeding schedules customized for age and breed.`
      },
      backgroundImage: "/home/works/work-1.png"
    },
    adult: {
      title: `Keep your pet active,\nhappy, and balanced`,
      problem: {
        label: "Problem",
        text: `Manage diet, track activity, and prevent early health issues. Dost syncs nutrition data and sends smart reminders — from walks to hydration checks.`
      },
      solution: {
        label: "Solution",
        text: `My cat gained weight after neutering.” → Dost adjusts daily calorie targets and suggests play routines to stay fit.`,
      },
      backgroundImage: "/home/works/work-2.png"
    },
    senior: {
      title: `Support and\ncomfort, every day`,
      problem: {
        label: "Problem",
        text: "Older pets need extra attention. Dost monitors changes in mobility, behavior, and appetite — providing timely advice and vet check alerts.",
      },
      solution: {
        label: "Solution",
        text: `My senior dog struggles with stairs.” → Dost suggests simple joint exercises and early vet screening reminders.`
      },
      backgroundImage: "/home/works/work-3.png"
    }
  };

  const currentStage = stages[activeTab];


  const tabsRef = {
    puppy: useRef(null),
    adult: useRef(null),
    senior: useRef(null),
  };
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const activeElement = tabsRef[activeTab]?.current;
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        height: activeElement.offsetHeight
      });
    }
  }, [activeTab]);

  return (
    <section className={`${styles.works} g-container`}>
      <div className={styles.works__background}>
        <SafeImage fill src={currentStage.backgroundImage} alt="Background" />
        <div className={styles.works__overlay} />
      </div>

      <div className={styles.works__header}>
        <h2 className={styles.works__header__title}>How it works?</h2>
        <p className={styles.works__header__description}>
          From playful puppies to wise seniors — Dosty adapts to every stage of your pet&apos;s life,
          offering guidance, reminders, and personalized care tips.
        </p>
      </div>

      <div className={styles.works__content}>
        <h3 className={styles.works__content__title}>{currentStage.title}</h3>

        <div className={styles.works__content__texts}>
          <div className={styles.works__content__texts__column}>
            <span className={styles.works__content__texts__label}>{currentStage.problem.label}</span>
            <p className={styles.works__content__texts__text}>{currentStage.problem.text}</p>
          </div>

          <div className={styles.works__content__texts__column}>
            <span className={styles.works__content__texts__label}>{currentStage.solution.label}</span>
            <p className={`${styles.works__content__texts__text} ${styles.works__content__texts__italic}`}>
              {currentStage.solution.text}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.works__group}>
        <div
          className={styles.indicator}
          style={indicatorStyle}
        />
        <button
          ref={tabsRef.puppy}
          className={`${styles.segment} ${activeTab === 'puppy' ? styles.active : ''}`}
          onClick={() => setActiveTab('puppy')}
        >
          <span>Puppy</span>
          <div className={styles.segment__progress} style={{ width: activeTab === 'puppy' ? `${progress}%` : '0%' }} />
        </button>

        <button
          ref={tabsRef.adult}
          className={`${styles.segment} ${activeTab === 'adult' ? styles.active : ''}`}
          onClick={() => setActiveTab('adult')}
        >
          <span>Adult</span>
          <div className={styles.segment__progress} style={{ width: activeTab === 'adult' ? `${progress}%` : '0%' }} />
        </button>

        <button
          ref={tabsRef.senior}
          className={`${styles.segment} ${activeTab === 'senior' ? styles.active : ''}`}
          onClick={() => setActiveTab('senior')}
        >
          <span>Senior</span>
          <div className={styles.segment__progress} style={{ width: activeTab === 'senior' ? `${progress}%` : '0%' }} />
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;