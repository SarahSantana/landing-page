import { coursesInfo, studyAreas } from "@/mocks/Courses";
import { ICourseInfo } from "@/types/Courses";
import { useEffect, useState } from "react";

const useCourses = () => {
  const INIT_SELECTED_NAVBAR_ITEM_INDEX = 0;
  const initSelectedArea = coursesInfo[INIT_SELECTED_NAVBAR_ITEM_INDEX];
  const [studyAreaTitles, setStudyAreaTitles] = useState<string[]>([]);
  const [selectedStudyArea, setSelectedStudyArea] =
    useState<ICourseInfo>(initSelectedArea);
  const [selectedNavbarItemIndex, setSelectedNavbarItemIndex] =
    useState<number>(INIT_SELECTED_NAVBAR_ITEM_INDEX);

  const handleSelectedItemNavbar = (itemIndex: number) => {
    setSelectedNavbarItemIndex(itemIndex);
    setSelectedStudyArea(coursesInfo[itemIndex]);
  };

  const setStudyAreaTitlesList = () => {
    const titles = studyAreas.map((item) => item.title);
    setStudyAreaTitles(titles);
  };

  useEffect(() => {
    setStudyAreaTitlesList();
  }, []);

  return {
    selectedStudyArea,
    studyAreaTitles,
    selectedNavbarItemIndex,
    handleSelectedItemNavbar,
  };
};

export default useCourses;
