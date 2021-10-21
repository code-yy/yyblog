import styles from "../styles/Home.module.css";
import Header from "../components/Index.page/Header";
import Main from "../components/Index.page/Main";
import Footer from "../components/Index.page/Footer";

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
