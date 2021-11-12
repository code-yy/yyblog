import styles from "src/styles/Home.module.css";
import Footer from "src/components/Home/Footer";
import Header from "src/components/Home/Header";
import Main from "src/components/Home/Main";

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
