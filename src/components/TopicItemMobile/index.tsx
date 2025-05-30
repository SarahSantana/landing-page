import { ITopicItem } from "@/types/TopicGroup";

import styles from "./TopicItemMobile.module.scss";

const TopicItemMobile: React.FC<ITopicItem> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>{description}</div>
      <div className={styles.topicTitle}>{title}</div>
    </div>
  );
};

export default TopicItemMobile;
