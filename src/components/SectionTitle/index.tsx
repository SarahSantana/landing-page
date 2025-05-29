import styles from "./SectionTitle.module.scss";

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={styles.titleContainer}>
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
    </div>
  );
};

export default SectionTitle;
