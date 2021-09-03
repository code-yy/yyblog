import Link from "next/link";
import styles from "./Main.module.css";

export default function Contact_Main() {
  return (
    <main className={styles.main}>
      <h2 className={styles.circle}></h2>

      <div className={styles.grid}>
        <p className={styles.description}>Contact</p>

        {/* <ul>
          <Link href="/Profile">
            <a>
              <li className={styles.list_style1}>Profile</li>
            </a>
          </Link>
          <Link href="/Works">
            <a>
              <li className={styles.list_style2}>Works</li>
            </a>
          </Link>
          <Link href="/Contact">
            <a>
              <li className={styles.list_style3}>Contact</li>
            </a>
          </Link>
        </ul> */}
      </div>
    </main>
  );
}
