import styles from "src/components/Portfolio/Portfolio.module.css";
import PortfolioMain from "src/components/Portfolio";
import Header from "src/layout/Header";
import Footer from "src/layout/Footer";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header title="Portfolio || YutoBlog" />
      <PortfolioMain />
      <Footer />
    </div>
  );
}
