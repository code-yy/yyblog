import Header from "src/components/Index.page/Header";
import Profile_Main from "src/components/Profile";
import styles from "src/components/Profile/Profile.module.css";
import Footer from "src/components/Index.page/Footer";

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header title="Profile || YutoBlog" />

      <Profile_Main />

      <Footer />
    </div>
  );
}
