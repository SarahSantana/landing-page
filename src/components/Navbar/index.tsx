import Logo from "@/components/Icons/Logo";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <Logo width={144} height={39} />
    </div>
  );
};

export default Navbar;
