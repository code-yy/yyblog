import Footer from "src/layout/Footer";
import Header from "src/layout/Header";
import Main from "src/layout/Main";
import styles from "src/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header title="YutoBlog" />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
