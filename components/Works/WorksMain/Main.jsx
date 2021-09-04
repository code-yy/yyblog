import Link from "next/link";
import styles from "./Main.module.css";

export default function Works_Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <p className={styles.description}>Works</p>

        <div className={styles.grid_div}>
          <Link href="https://utopiayy.sakura.ne.jp/">
            <a className={styles.list_style1}></a>
          </Link>
          <Link href="https://utopia300.github.io/yuto_it/todo.test/index.html">
            <a className={styles.list_style2}></a>
          </Link>
          <Link href="https://utopia300.github.io/yuto_it/quiz.test/index.html">
            <a className={styles.list_style3}></a>
          </Link>
          <Link href="https://yuto-page.vercel.app/">
            <a className={styles.list_style4}></a>
          </Link>
        </div>
      </div>
    </main>
  );
}
