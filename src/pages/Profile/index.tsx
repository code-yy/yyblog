import styles from "../../components/Profile/Profile.module.css";
import Header from "../../components/Index.page/Header";
import Footer from "../../components/Index.page/Footer";
import Profile_Main from "../../components/Profile";

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header title="Profile || YutoBlog" />

      <Profile_Main />

      <Footer />
    </div>
  );
}
