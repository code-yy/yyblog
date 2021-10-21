import styles from "src/styles/Home.module.css";
import Footer from "src/components/Index.page/Footer";
import Header from "src/components/Index.page/Header";
import Main from "src/components/Index.page/Main";

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
