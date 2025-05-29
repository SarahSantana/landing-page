"use client";

import NavbarNavigation from "@/components/NavbarNavigation";
import SectionTitle from "@/components/SectionTitle";
import TopicGroup from "@/components/TopicGroup";
import useCourses from "@/hooks/useCourses";

import styles from "./Courses.module.scss";
import texts from "./texts";

export default function Courses() {
  const {
    selectedStudyArea,
    studyAreaTitles,
    selectedNavbarItemIndex,
    isDisappearCurrentStudyAreaSelected,
    isAppearNewStudyAreaSelected,
    handleSelectedItemNavbar,
  } = useCourses();
  return (
    <section className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionTitle
            title={texts.ptBR.header.title}
            subtitle={texts.ptBR.header.subtitle}
          />
          <NavbarNavigation
            items={studyAreaTitles}
            activeItemIndex={selectedNavbarItemIndex}
            handleItemAction={handleSelectedItemNavbar}
          />
        </div>
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
      </div>
    </section>
  );
}
