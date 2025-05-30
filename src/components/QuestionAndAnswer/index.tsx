import styles from "./QuestionAndAnswer.module.scss";

const QuestionAndAnswer: React.FC<{
  question: string;
  answer: string;
}> = ({ question, answer }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.question}>{question}</div>
      <div className={styles.answer}>{answer}</div>
    </div>
  );
};

export default QuestionAndAnswer;
