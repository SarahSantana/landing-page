import React from "react";

import { ITopicGroup } from "@/types/TopicGroup";

import TopicItem from "../TopicItem";
import styles from "./TopicGroup.module.scss";

const TopicGroup: React.FC<ITopicGroup> = ({ title, topics }) => {
  return (
    <React.Fragment>
      <div className={styles.title}>{title}</div>
      <div className={styles.topicsContainer}>
        {topics.map((item, index) => (
          <TopicItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TopicGroup;
