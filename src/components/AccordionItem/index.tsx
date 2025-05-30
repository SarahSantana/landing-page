import { IAccordionPanelItem } from "@/types/Accordion";

import TopicItemMobile from "../TopicItemMobile";
import styles from "./AccordionItem.module.scss";

const AccordionItem: React.FC<{
  headerTitle: string;
  accordionItemIndex: number;
  panelItems: IAccordionPanelItem | undefined;
  currentAccordionItemOpened: number | undefined;
  handleGetAccordionPanel: (itemIndex: number) => void;
}> = ({
  headerTitle,
  accordionItemIndex,
  panelItems,
  currentAccordionItemOpened,
  handleGetAccordionPanel,
}) => {
  const handleToggleAccordionItem = (itemIndex: number) => {
    handleGetAccordionPanel(itemIndex);
  };

  return (
    <div className={styles.accordionItem}>
      <div className={`${styles.accordionHeader} ${styles.active}`}>
        <div className={styles.title}>{headerTitle}</div>
        <div
          className={`${styles.accordionTrigger} ${
            currentAccordionItemOpened === accordionItemIndex
              ? styles.opened
              : styles.closed
          }`}
          onClick={() => handleToggleAccordionItem(accordionItemIndex)}
        >
          {currentAccordionItemOpened === accordionItemIndex ? "-" : "+"}
        </div>
      </div>
      {panelItems?.id === accordionItemIndex && (
        <div className={styles.accordionPanel}>
          {panelItems.topics.map((item, index) => (
            <TopicItemMobile key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
