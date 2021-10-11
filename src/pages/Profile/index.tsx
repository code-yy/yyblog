import styles from "../../components/Profile/ProfileMain/Main.module.css";
import Header from "../../components/Index.page/Header/Header";
import Footer from "../../components/Index.page/Footer/Footer";
import Profile_Main from "../../components/Profile/ProfileMain/Main";

export default function About() {
  return (
    <div className={styles.container}>
      <Header title="Profile || YutoBlog" />

      <Profile_Main />

      <Footer />
    </div>
  );
}
