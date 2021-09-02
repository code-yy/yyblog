import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <h2 className={styles.circle}></h2>

      <div className={styles.grid}>
        <p className={styles.description}>Hello!!</p>

        <ul>
          <li className={styles.list_style}></li>
          <li className={styles.list_style}></li>
          <li className={styles.list_style}></li>
        </ul>
      </div>
    </main>
  );
}
