import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.Header}>
      <Link href="https://github.com/Utopia300">
        <a>
          <div></div>
        </a>
      </Link>
      <ul>
        {/* top */}
        <Link href="/">
          <a>
            <li className={styles.list_style0}>Top</li>
          </a>
        </Link>
        {/* Profile */}
        <Link href="/Profile">
          <a>
            <li className={styles.list_style1}>Profile</li>
          </a>
        </Link>
        {/* Works */}
        <Link href="/Works">
          <a>
            <li className={styles.list_style2}>Portfolio</li>
          </a>
        </Link>
      </ul>
    </header>
  );
}
