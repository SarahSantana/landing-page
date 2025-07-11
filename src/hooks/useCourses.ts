import { useEffect, useRef, useState } from "react";

import { coursesInfo, studyAreas } from "@/mocks/Courses";
import { IAccordionPanelItem } from "@/types/Accordion";
import { ICourseInfo } from "@/types/Courses";

const useCourses = () => {
  const INIT_SELECTED_ITEM_INDEX = 0;
  const initSelectedArea = coursesInfo[INIT_SELECTED_ITEM_INDEX];
  const [studyAreaTitles, setStudyAreaTitles] = useState<string[]>([]);
  const [selectedStudyArea, setSelectedStudyArea] =
    useState<ICourseInfo>(initSelectedArea);
  const [selectedAccordionStudyArea, setSelectedAccordionStudyArea] =
    useState<IAccordionPanelItem>();
  const [selectedNavbarItemIndex, setSelectedNavbarItemIndex] =
    useState<number>(INIT_SELECTED_ITEM_INDEX);
  const [
    isDisappearCurrentStudyAreaSelected,
    setIsDisappearCurrentStudyAreaSelected,
  ] = useState(false);
  const [isAppearNewStudyAreaSelected, setIsAppearNewStudyAreaSelected] =
    useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelectedItemNavbar = (itemIndex: number) => {
    if (itemIndex === selectedNavbarItemIndex) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setIsDisappearCurrentStudyAreaSelected(true);
    setIsAppearNewStudyAreaSelected(false);

    timeoutRef.current = setTimeout(() => {
      setSelectedStudyArea(coursesInfo[itemIndex]);
      setSelectedNavbarItemIndex(itemIndex);
      setIsDisappearCurrentStudyAreaSelected(false);
      setIsAppearNewStudyAreaSelected(true);
      timeoutRef.current = null;
    }, 1200);
  };

  const handleGetAccordionPanel = (itemIndex: number) => {
    if (itemIndex === selectedAccordionStudyArea?.id) {
      setSelectedAccordionStudyArea(undefined);
      return;
    }
    setSelectedAccordionStudyArea({
      id: itemIndex,
      topics: coursesInfo[itemIndex].topics,
    });
  };

  const setStudyAreaTitlesList = () => {
    const titles = studyAreas.map((item) => item.title);
    setStudyAreaTitles(titles);
  };

  useEffect(() => {
    setStudyAreaTitlesList();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    selectedStudyArea,
    studyAreaTitles,
    selectedNavbarItemIndex,
    isDisappearCurrentStudyAreaSelected,
    isAppearNewStudyAreaSelected,
    selectedAccordionStudyArea,
    handleSelectedItemNavbar,
    handleGetAccordionPanel,
  };
};

export default useCourses;
