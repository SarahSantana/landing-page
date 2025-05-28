"use client";

import Image from "next/image";
import styles from "./Animation.module.scss";
import useAnimation from "@/hooks/useAnimation";

export default function Animation() {
  const { refImage, isImageVisible } = useAnimation();

  return (
    <section>
      <div ref={refImage} className={styles.container}>
        <div
          className={styles.reveal}
          style={{
            height: isImageVisible ? "clamp(20rem, 41.7vw, 50rem)" : "0px",
          }}
        >
          <Image
            src="/images/intro.png"
            alt="Banner animado"
            width={1495}
            height={804}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
