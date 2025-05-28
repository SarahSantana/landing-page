"use client";

import Image from "next/image";
import styles from "./ImageAnimate.module.scss";
import useImageAnimate from "@/hooks/useImageAnimate";

export const ImageAnimate: React.FC = () => {
  const { refImage, isImageVisible } = useImageAnimate();

  return (
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
  );
};

export default ImageAnimate;
