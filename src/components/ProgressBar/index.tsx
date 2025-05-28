"use client";

import styles from "./ProgressBar.module.scss";

const ProgressBar: React.FC<{ progressValue: number }> = ({
  progressValue,
}) => {
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progressValue}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
