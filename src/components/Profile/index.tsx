import styles from "./Profile.module.css";
import Image from "next/image";

export default function Profile_Main() {
  return (
    <main className={styles.main}>
      <h2 className={styles.description}>Profile</h2>
      <div className={styles.circle}></div>

      <div>
        <p className={styles.Profile}>■Comments</p>
        <div className={styles.Profile_container}>
          <ul>
            <li>19 years old</li>
            <li>I love football⚽️</li>
          </ul>
        </div>
        <p className={styles.Skills}>■Languages and Tools:</p>
        <div className={styles.Skills_logo}>
          <div>
            <Image src="/Profile/JavaScript_logo.png" alt="JavaScript" width="50" height="50" />
          </div>

          <div>
            <Image
              src="/Profile/Typescript_logo_2020.svg.png"
              alt="TypeScript"
              width="50"
              height="50"
            />
          </div>

          <div>
            <Image src="/Profile/react-logo2.png" alt="React" width="50" height="50" />
          </div>

          <div>
            <Image src="/Profile/next.js-logo2.png" alt="Next.js" width="50" height="50" />
          </div>

          <div>
            <Image src="/Profile/tailwindcss.logo2.svg" alt="TailwindCSS" width="50" height="50" />
          </div>

          <div>
            <Image src="/Profile/git_logo.png" alt="git" width="50" height="50" />
          </div>

          <div>
            <Image src="/Profile/github_logo.png" alt="Github" width="50" height="50" />
          </div>
        </div>
      </div>
    </main>
  );
}
