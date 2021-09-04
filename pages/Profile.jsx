import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Index.page/Header/Header";
import Footer from "../components/Index.page/Footer/Footer";
import Profile_Main from "../components/Profile/ProfileMain/Main";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>yuto_Profile.page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Profile_Main />

      <Footer />
    </div>
  );
}