import ImageAnimate from "@/components/ImageAnimate";
import { MovingSentences } from "@/components/MovingSentences";

import styles from "./Animation.module.scss";

export default function Animation() {
  return (
    <section>
      <MovingSentences />
      <div className={styles.imageContainer}>
        <ImageAnimate />
      </div>
    </section>
  );
}
