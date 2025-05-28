"use client";

import Logo from "@/components/Icons/Logo";
import useNavbar from "@/hooks/useNavbar";

import ProgressBar from "../ProgressBar";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const { progressValue, getNavbarBackground } = useNavbar();

  return (
    <div
      className={styles.mainContainer}
      style={{
        backgroundColor: getNavbarBackground(),
      }}
    >
      <div className={styles.navbar}>
        <Logo width={144} height={39} />
      </div>
      <div className={styles.progressBar}>
        <ProgressBar {...{ progressValue }} />
      </div>
    </div>
  );
};

export default Navbar;
