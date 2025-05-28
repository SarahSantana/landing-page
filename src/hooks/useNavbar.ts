import { useEffect, useState } from "react";

import { theme } from "@/app/styles/theme";

const useNavbar = () => {
  const [progressValue, setProgressValue] = useState(0);

  const getScrollProgress = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const totalScroll = scrollHeight - clientHeight;
    const scrollPercent = (scrollTop / totalScroll) * 100;
    setProgressValue(scrollPercent);
  };

  const getNavbarBackground = () => {
    return progressValue === 0
      ? theme.background.backgroundPrimary
      : theme.background.backgroundNavbar;
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(getScrollProgress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { getNavbarBackground, progressValue };
};

export default useNavbar;
