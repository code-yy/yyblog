import Link from "next/link";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <p className={styles.description}>Welcome to Yutopage✨</p>
      <div className={styles.circle}></div>

      <div className={styles.link}>
        <Link href="/Profile">
          <a className={styles.link_style1}>Profile</a>
        </Link>
        <Link href="/Portfolio">
          <a className={styles.link_style2}>Portfolio</a>
        </Link>
        <Link href="/blogs">
          <a className={styles.link_style3}>Blog</a>
        </Link>
        <Link href="https://zenn.dev/yuto76">
          <a className={styles.link_style4}>Zenn</a>
        </Link>
      </div>
    </main>
  );
}

export default Main;
