import Link from "next/link";
import styles from "./Main.module.css";
import icon_java from "./image/javascript.png";
import icon_php from "./image/php.png";
import icon_react from "./image/react.png";
import icon_next from "./image/nextjs-logo.png";

import Image from "next/image";

export default function Profile_Main() {
  return (
    <main className={styles.main}>
      <h2 className={styles.circle}></h2>

      <div className={styles.grid}>
        <p className={styles.description}>Yuto Yoshino</p>

        <p className={styles.Skills}>□Skills</p>
        <Image src={icon_java} alt="icon_java" width="120px" height="120px" />
        <Image src={icon_php} alt="icon_php" width="160px" height="120px" />
        <Image src={icon_react} alt="icon_react" width="140px" height="120px" />
        <Image src={icon_next} alt="icon_react" width="140px" height="120px" />
      </div>
    </main>
  );
}
