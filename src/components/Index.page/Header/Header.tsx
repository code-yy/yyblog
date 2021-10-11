import Head from "next/head";
import Link from "next/link";
import styles from "./Header.module.css";

type Props = {
  title?: string;
};

const Header = ({ title = "YutoBlog" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

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
          <Link href="/Portfolio">
            <a>
              <li className={styles.list_style2}>Portfolio</li>
            </a>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
