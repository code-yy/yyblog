import Link from "next/link";
import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.logo}>
        Follow Me
        <Link href="https://twitter.com/yuto_yy_76">
          <a>
            {" "}
            in
            <FaTwitter />
          </a>
        </Link>
      </h3>
    </footer>
  );
}
