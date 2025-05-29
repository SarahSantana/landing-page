import { ITopicItem } from "./TopicGroup";

export interface ICourseInfo {
  id: number;
  title: string;
  topics: ITopicItem[];
}

export interface IStudyArea {
  id: number;
  title: string;
}
