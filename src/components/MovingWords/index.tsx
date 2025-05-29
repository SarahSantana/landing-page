"use client";

import useScrollTimeline from "@/hooks/useScrollTimeline";

import styles from "./MovingWords.module.scss";
import { texts } from "./texts";

const MovingWords: React.FC = () => {
  const { carouselTrackFirstRef, carouselTrackSecondRef } = useScrollTimeline();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.carouselWrapper}>
        <div ref={carouselTrackFirstRef} className={styles.carouselTrack}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={styles.firstLine}>
              {texts.ptBR.sentences.firstLine}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        <div ref={carouselTrackSecondRef} className={styles.carouselTrack}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={styles.secondLine}>
              {texts.ptBR.sentences.secondLine}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingWords;
