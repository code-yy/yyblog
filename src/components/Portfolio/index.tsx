import styles from "./Portfolio.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioMain() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <p className={styles.description}>Portfolio</p>

        <div className={styles.grid_div}>
          <Link href="https://yutopage.vercel.app/">
            <a>
              <Image src="/Profile/YutoBlog.png" alt="Yutopage" width="500" height="300" />
            </a>
          </Link>

          <Link href="https://zenn.dev/yuto76?tab=scraps">
            <a>
              <Image src="/Profile/yuto-Zenn.png" alt="Yutopage" width="500" height="300" />
            </a>
          </Link>

          <Link href="https://uozumi-fc.vercel.app/">
            <a>
              <Image src="/Profile/UOZUMI FC.png" alt="Yutopage" width="500" height="300" />
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
