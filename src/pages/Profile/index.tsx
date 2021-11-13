import Profile_Main from "src/components/Profile";
import styles from "src/components/Profile/Profile.module.css";
import Footer from "src/layout/Footer";
import Header from "src/layout/Header";

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header title="Profile || YutoBlog" />
      <Profile_Main />
      <Footer />
    </div>
  );
}
