import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.Header}>
      <Link href="/">
        <a>
          <div></div>
        </a>
      </Link>
      <ul>
        <Link href="/">
          <a>
            <li className={styles.list_style1}>Profile</li>
          </a>
        </Link>
        <Link href="/Profile">
          <a>
            <li className={styles.list_style2}>Works</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className={styles.list_style3}>Contact</li>
          </a>
        </Link>
      </ul>
    </header>
  );
}
