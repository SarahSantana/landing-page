import { ITopicGroup } from "@/types/TopicGroup";

import TopicItem from "../TopicItem";
import styles from "./TopicGroup.module.scss";

const TopicGroup: React.FC<ITopicGroup> = ({ title, topics }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {topics.map((item, index) => (
        <TopicItem
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default TopicGroup;
