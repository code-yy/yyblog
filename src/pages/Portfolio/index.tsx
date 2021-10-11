import styles from "../../components/Works/WorksMain/Main.module.css";
import Header from "../../components/Index.page/Header/Header";
import Footer from "../../components/Index.page/Footer/Footer";
import Main_Works from "../../components/Works/WorksMain/Main";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header title="Portfolio || YutoBlog" />

      <Main_Works />

      <Footer />
    </div>
  );
}
