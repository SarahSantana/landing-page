import QuestionAndAnswer from "@/components/QuestionAndAnswer";
import SectionTitle from "@/components/SectionTitle";

import { QuestionsAndAnswers } from "../../mocks/QuestionsAndAnswers";
import styles from "./Faq.module.scss";
import texts from "./texts";

export default function Faq() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.content}>
        <SectionTitle
          title={texts.ptBR.header.title}
          subtitle={texts.ptBR.header.subtitle}
        />
        <div className={styles.questionsContainer}>
          {QuestionsAndAnswers.map((item, index) => (
            <QuestionAndAnswer key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
