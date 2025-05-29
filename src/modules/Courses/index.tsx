import NavbarNavigation from "@/components/NavbarNavigation";

import styles from "./Courses.module.scss";
import SectionTitle from "@/components/SectionTitle";
import texts from "./texts";

export default function Courses() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionTitle
            title={texts.ptBR.header.title}
            subtitle={texts.ptBR.header.subtitle}
          />
          <NavbarNavigation items={texts.ptBR.navigatorItens} />
        </div>
      </div>
    </section>
  );
}
