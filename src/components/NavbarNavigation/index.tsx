import styles from "./NavbarNavigation.module.scss";

const NavbarNavigation: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul className={styles.coursesNav}>
      {items.map((item, index) => {
        return (
          <li key={index} className={styles.navItem}>
            <div className={styles.navItemBorder}>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.navItemText}>{item}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarNavigation;
