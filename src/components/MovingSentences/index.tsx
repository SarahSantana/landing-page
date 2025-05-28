import styles from "./MovingSentences.module.scss";
import { texts } from "./texts";

export const MovingSentences: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          <div className={styles.sentence}>{texts.ptBR.firstLine}</div>
          <div className={styles.sentence}>{texts.ptBR.firstLine}</div>
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        <div className={`${styles.carouselTrack} ${styles.secoundCaousel}`}>
          <div className={styles.sentence}>{texts.ptBR.secondLine}</div>
          <div className={styles.sentence}>{texts.ptBR.secondLine}</div>
        </div>
      </div>
    </div>
  );
};
