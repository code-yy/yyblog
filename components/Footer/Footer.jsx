import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.logo}>Follow Me</h3>

      <p>
        {" "}
        in
        <FaTwitter />
      </p>
    </footer>
  );
}
