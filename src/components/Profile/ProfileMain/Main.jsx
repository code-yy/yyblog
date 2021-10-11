import styles from "./Main.module.css";
import Image from "next/image";

export default function Profile_Main() {
  return (
    <main className={styles.main}>
      <h2 className={styles.circle}></h2>

      <div className={styles.grid}>
        <p className={styles.description}>Yuto Yoshino</p>

        <p className={styles.Skills}>□Skills</p>
        <Image src="/image/javascript.png" alt="icon_java" width="120px" height="120px" />
        <Image src="/image/php.png" alt="icon_php" width="160px" height="120px" />
        <Image src="/image/react.png" alt="icon_react" width="140px" height="120px" />
        <Image src="/image/nextjs-logo.png" alt="icon_react" width="140px" height="120px" />
      </div>
    </main>
  );
}
