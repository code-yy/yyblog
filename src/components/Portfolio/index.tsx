import styles from "./Portfolio.module.css";
import Link from "next/link";

export default function Profile() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <p className={styles.description}>Portfolio</p>

        <div className={styles.grid_div}>
          <Link href="https://yutopage.vercel.app/">
            <a className={styles.list_style1}></a>
          </Link>

          <Link href="https://zenn.dev/yuto76?tab=scraps">
            <a className={styles.list_style2}></a>
          </Link>

          <Link href="https://uozumi-fc.vercel.app/">
            <a className={styles.list_style3}></a>
          </Link>
        </div>
      </div>
    </main>
  );
}
