import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
        <Link href="/Portfolio">
          <a>
            <li className={styles.list_style2}>Portfolio</li>
          </a>
        </Link>
        <Link href="/blogs">
          <a>
            <li className={styles.list_style2}>Blog</li>
          </a>
        </Link>
      </ul>
    </footer>
  );
}
