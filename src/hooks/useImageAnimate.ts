import { useEffect, useRef, useState } from "react";

const useImageAnimate = () => {
  const refImage = useRef<HTMLDivElement>(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection observed:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          imageObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -20% 0px" }
    );

    if (refImage.current) {
      imageObserver.observe(refImage.current);
    }

    return () => {
      if (refImage.current) imageObserver.unobserve(refImage.current);
    };
  }, []);

  return { refImage, isImageVisible };
};

export default useImageAnimate;
