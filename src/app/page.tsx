import BannerHeader from "@/modules/BannerHeader";
import Animation from "@/modules/Animation";
import styles from "./page.module.scss";
import Courses from "@/modules/Courses";
import Faq from "@/modules/Faq";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BannerHeader />
        <Animation />
        <Courses />
        <Faq />
      </main>
    </div>
  );
}
