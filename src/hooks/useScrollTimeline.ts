import { useCallback, useEffect, useRef } from "react";

import { ScrollDirect } from "@/enums";

const useScrollTimeline = () => {
  const MAX_SCROLL_SPEED = 3;
  const SMOOTHING_SCROLL = 0.1;
  const waitScrollTimeout = {
    current: null as ReturnType<typeof setTimeout> | null,
  };
  const lastScrollValue = useRef(0);
  const currentScrollSpeed = useRef(0);
  const targetScrollSpeed = useRef(0);
  const scrollTimeLineAnimationFrame = useRef<number | null>(null);

  const carouselTrackFirstRef = useRef<HTMLDivElement>(null);
  const carouselTrackSecondRef = useRef<HTMLDivElement>(null);
  const carouselFirstDirection = useRef(0);
  const carouselSecondDirection = useRef(0);
  const trackWidth = useRef(0);

  const handleScrollTimeLineAnimation = useCallback(() => {
    const currentScrollValue = window.scrollY;
    const scrollDirection =
      currentScrollValue > lastScrollValue.current
        ? ScrollDirect.DOWN
        : ScrollDirect.UP;

    targetScrollSpeed.current =
      scrollDirection === ScrollDirect.DOWN
        ? -MAX_SCROLL_SPEED
        : MAX_SCROLL_SPEED;

    currentScrollSpeed.current +=
      (targetScrollSpeed.current - currentScrollSpeed.current) *
      SMOOTHING_SCROLL;

    carouselFirstDirection.current += currentScrollSpeed.current;
    carouselSecondDirection.current -= currentScrollSpeed.current;

    if (carouselFirstDirection.current <= -trackWidth.current) {
      carouselFirstDirection.current += trackWidth.current;
    } else if (carouselFirstDirection.current >= 0) {
      carouselFirstDirection.current -= trackWidth.current;
    }

    if (carouselSecondDirection.current <= -trackWidth.current) {
      carouselSecondDirection.current += trackWidth.current;
    } else if (carouselSecondDirection.current >= 0) {
      carouselSecondDirection.current -= trackWidth.current;
    }

    if (carouselTrackFirstRef.current) {
      carouselTrackFirstRef.current.style.transform = `translateX(${carouselFirstDirection.current}px)`;
    }
    if (carouselTrackSecondRef.current) {
      carouselTrackSecondRef.current.style.transform = `translateX(${carouselSecondDirection.current}px)`;
    }

    lastScrollValue.current = currentScrollValue;
    scrollTimeLineAnimationFrame.current = requestAnimationFrame(
      handleScrollTimeLineAnimation
    );
  }, []);

  useEffect(() => {
    if (carouselTrackFirstRef.current) {
      trackWidth.current = carouselTrackFirstRef.current.scrollWidth / 2;
    }

    const handleScroll = () => {
      if (scrollTimeLineAnimationFrame.current === null) {
        scrollTimeLineAnimationFrame.current = requestAnimationFrame(
          handleScrollTimeLineAnimation
        );
      }
      if (waitScrollTimeout.current) clearTimeout(waitScrollTimeout.current);
      waitScrollTimeout.current = setTimeout(() => {
        if (scrollTimeLineAnimationFrame.current) {
          cancelAnimationFrame(scrollTimeLineAnimationFrame.current);
          scrollTimeLineAnimationFrame.current = null;
          currentScrollSpeed.current = 0;
          targetScrollSpeed.current = 0;
        }
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeLineAnimationFrame.current) {
        cancelAnimationFrame(scrollTimeLineAnimationFrame.current);
      }
      if (waitScrollTimeout.current) clearTimeout(waitScrollTimeout.current);
    };
  }, [handleScrollTimeLineAnimation]);

  return { carouselTrackFirstRef, carouselTrackSecondRef };
};

export default useScrollTimeline;
