import styles from "./Footer.module.css";
import Link from "next/link";
import { SiZenn } from "react-icons/si";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          {/* top */}
          <Link href="/">
            <a>
              <li>Top</li>
            </a>
          </Link>
          {/* Profile */}
          <Link href="/Profile">
            <a>
              <li>Profile</li>
            </a>
          </Link>
          {/* Works */}
          <Link href="/Portfolio">
            <a>
              <li>Portfolio</li>
            </a>
          </Link>
          <Link href="/blogs">
            <a>
              <li>Blog</li>
            </a>
          </Link>
        </ul>
      </nav>
      <div className={styles.icons}>
        <Link href="https://github.com/Utopia300">
          <a>
            <FaGithub />
          </a>
        </Link>
        <Link href="https://zenn.dev/yuto76?tab=scraps">
          <a>
            <SiZenn />
          </a>
        </Link>
        <Link href="https://twitter.com/yuto_yy_76">
          <a>
            <FaTwitter />
          </a>
        </Link>
        <Link href="https://www.instagram.com/yuto.tsx/">
          <a>
            <FaInstagram />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
