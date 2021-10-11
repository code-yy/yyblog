import Link from "next/link";
import styles from "./Main.module.css";

export default function Works_Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <p className={styles.description}>Portfolio</p>

        <div className={styles.grid_div}>
          <Link href="https://utopiayy.sakura.ne.jp/">
            <a className={styles.list_style1} width="200px"></a>
          </Link>

          <Link href="https://yuto-page.vercel.app/">
            <a className={styles.list_style4} width="200px"></a>
          </Link>
        </div>
      </div>
    </main>
  );
}
