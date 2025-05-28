"use client";

import styles from "./Banner.module.scss";
import { texts } from "./texts";

const Banner: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <div className={styles.textFirst}>
          {texts.ptBR.description.textFirst}
        </div>
        <div className={styles.textSecond}>
          {texts.ptBR.description.textSecond}
          <div className={styles.textMuted}>
            {texts.ptBR.description.textMuted}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
