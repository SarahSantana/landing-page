import { ITopicItem } from "@/types/TopicGroup";

import styles from "./TopicItem.module.scss";

const TopicItem: React.FC<ITopicItem> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topicTitle}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default TopicItem;
