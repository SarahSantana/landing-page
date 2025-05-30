import { IAccordionPanelItem } from "@/types/Accordion";

import AccordionItem from "../AccordionItem";
import styles from "./Accordion.module.scss";

const Accordion: React.FC<{
  itemHeaders: string[];
  panelItems: IAccordionPanelItem | undefined;
  handleGetAccordionPanel: (itemIndex: number) => void;
}> = ({ itemHeaders, panelItems, handleGetAccordionPanel }) => {
  return (
    <div className={styles.accordion}>
      {itemHeaders.map((item, index) => (
        <AccordionItem
          key={index}
          headerTitle={item}
          accordionItemIndex={index}
          panelItems={panelItems}
          currentAccordionItemOpened={panelItems?.id}
          handleGetAccordionPanel={handleGetAccordionPanel}
        />
      ))}
    </div>
  );
};

export default Accordion;
