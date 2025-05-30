"use client";

import { theme } from "@/app/styles/theme";
import ImageAnimate from "@/components/ImageAnimate";
import { MovingSentences } from "@/components/MovingSentences";
import MovingWords from "@/components/MovingWords";
import useResize from "@/hooks/useResize";

import styles from "./Animation.module.scss";

export default function Animation() {
  const { isMobile } = useResize(theme.breakPoints.mobile);
  return (
    <section>
      <MovingSentences />
      {!isMobile && (
        <div className={styles.imageContainer}>
          <ImageAnimate />
          <div className={styles.movingWordsContainer}>
            <MovingWords />
          </div>
        </div>
      )}
    </section>
  );
}
