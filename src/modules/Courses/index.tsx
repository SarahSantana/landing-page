"use client";

import { theme } from "@/app/styles/theme";
import Accordion from "@/components/Accordion/Accordion";
import NavbarNavigation from "@/components/NavbarNavigation";
import SectionTitle from "@/components/SectionTitle";
import TopicGroup from "@/components/TopicGroup";
import useCourses from "@/hooks/useCourses";
import useResize from "@/hooks/useResize";

import styles from "./Courses.module.scss";
import texts from "./texts";

export default function Courses() {
  const {
    selectedStudyArea,
    studyAreaTitles,
    selectedNavbarItemIndex,
    isDisappearCurrentStudyAreaSelected,
    isAppearNewStudyAreaSelected,
    selectedAccordionStudyArea,
    handleSelectedItemNavbar,
    handleGetAccordionPanel,
  } = useCourses();
  const { isMobile } = useResize(theme.breakPoints.desktopSm);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionTitle
            title={texts.ptBR.header.title}
            subtitle={texts.ptBR.header.subtitle}
          />
          {!isMobile && (
            <NavbarNavigation
              items={studyAreaTitles}
              activeItemIndex={selectedNavbarItemIndex}
              handleItemAction={handleSelectedItemNavbar}
            />
          )}
        </div>
        {!isMobile ? (
          <div
            className={`${styles.topicContainer} 
          ${isDisappearCurrentStudyAreaSelected ? styles.disappear : ""} 
          ${isAppearNewStudyAreaSelected ? styles.appear : ""}`}
          >
            <TopicGroup
              title={selectedStudyArea.title}
              topics={selectedStudyArea.topics}
            />
          </div>
        ) : (
          <Accordion
            itemHeaders={studyAreaTitles}
            panelItems={selectedAccordionStudyArea}
            handleGetAccordionPanel={handleGetAccordionPanel}
          />
        )}
      </div>
    </section>
  );
}
