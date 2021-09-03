import Link from "next/link";
import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.logo}>Follow Me</h3>
      <Link href="https://twitter.com/yuto_yy_76">
        <a>
          <p>
            {" "}
            in
            <FaTwitter />
          </p>
        </a>
      </Link>
    </footer>
  );
}
