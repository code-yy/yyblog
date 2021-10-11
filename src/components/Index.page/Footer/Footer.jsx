import Link from "next/link";
import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.logo}>
        <Link href="https://twitter.com/yuto_yy_76">
          <a>
            <FaTwitter size={30} color={"#00acee"} />
          </a>
        </Link>
        <p className={styles.logo_p}>Follow Me</p>
      </h3>
      <h3 className={styles.logo_2}>
        <IoMdMail size={30} />
        <p className={styles.logo_p}>jiyeyouren523@gmail.com</p>
      </h3>
    </footer>
  );
}
