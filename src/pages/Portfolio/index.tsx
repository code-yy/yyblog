import styles from "../../components/Portfolio/Portfolio.module.css";
import Header from "../../components/Index.page/Header/Header";
import Footer from "../../components/Index.page/Footer/Footer";
import Portfolio_Main from "../../components/Portfolio";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header title="Portfolio || YutoBlog" />

      <Portfolio_Main />

      <Footer />
    </div>
  );
}
