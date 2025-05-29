import ImageAnimate from "@/components/ImageAnimate";
import { MovingSentences } from "@/components/MovingSentences";

import styles from "./Animation.module.scss";
import MovingWords from "@/components/MovingWords";

export default function Animation() {
  return (
    <section>
      <MovingSentences />
      <div className={styles.imageContainer}>
        <ImageAnimate />
        <div className={styles.movingWordsContainer}>
          <MovingWords />
        </div>
      </div>
    </section>
  );
}
