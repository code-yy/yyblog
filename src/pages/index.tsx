import styles from "../styles/Home.module.css";
import Header from "../components/Index.page/Header/Header";
import Main from "../components/Index.page/Main/Main";
import Footer from "../components/Index.page/Footer/Footer";

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
