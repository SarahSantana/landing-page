import styles from "./NavbarNavigation.module.scss";

const NavbarNavigation: React.FC<{
  items: string[];
  handleItemAction: (itemIndex: number) => void;
  activeItemIndex?: number;
}> = ({ items, handleItemAction, activeItemIndex }) => {
  return (
    <ul className={styles.coursesNav}>
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={`${styles.navItem} ${
              activeItemIndex === index ? styles.active : ""
            }`}
            onClick={() => handleItemAction(index)}
          >
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
