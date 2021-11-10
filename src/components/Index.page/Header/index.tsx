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
        <Link href="/">
          <a>
            <div></div>
          </a>
        </Link>
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
            <Link href="/zenn">
              <a>
                <li>zenn</li>
              </a>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
