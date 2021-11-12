import styles from "src/components/Portfolio/Portfolio.module.css";
import Footer from "src/components/Home/Footer";
import Header from "src/components/Home/Header";
import PortfolioMain from "src/components/Portfolio";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header title="Portfolio || YutoBlog" />

      <PortfolioMain />

      <Footer />
    </div>
  );
}
