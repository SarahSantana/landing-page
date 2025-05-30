"use client";

import { theme } from "@/app/styles/theme";
import useResize from "@/hooks/useResize";

import styles from "./Banner.module.scss";
import { texts } from "./texts";

const Banner: React.FC = () => {
  const { isMobile } = useResize(theme.breakPoints.mobile);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <div className={styles.textFirst}>
          {texts.ptBR.description.textFirst}
        </div>
        <div className={styles.textSecond}>
          {texts.ptBR.description.textSecond}
          <div className={styles.textMuted}>
            {isMobile
              ? texts.ptBR.description.textMutedMobile
                  .split("\n")
                  .map((line, index) => <div key={index}>{line}</div>)
              : texts.ptBR.description.textMuted}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
