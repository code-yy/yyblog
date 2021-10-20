import styles from "./Portfolio.module.css";
import Link from "next/link";

export default function Profile() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <p className={styles.description}>Portfolio</p>

        <div className={styles.grid_div}>
          <Link href="https://utopiayy.sakura.ne.jp/">
            <a className={styles.list_style1}></a>
          </Link>

          <Link href="https://yuto-page.vercel.app/">
            <a className={styles.list_style4}></a>
          </Link>
        </div>
      </div>
    </main>
  );
}
