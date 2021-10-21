import styles from "../../components/Portfolio/Portfolio.module.css";
import Header from "../../components/Index.page/Header";
import Footer from "../../components/Index.page/Footer";
import PortfolioMain from "../../components/Portfolio";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header title="Portfolio || YutoBlog" />

      <PortfolioMain />

      <Footer />
    </div>
  );
}
