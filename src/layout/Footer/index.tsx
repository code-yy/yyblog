import Link from "next/link";
import { SiZenn } from "react-icons/si";
import { FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-700 text-center text-gray-50 py-9">
      <div className="text-6xl flex justify-center">
        <Link href="https://github.com/Utopia300">
          <a className="mr-7">
            <FaGithub />
          </a>
        </Link>
        <Link href="https://zenn.dev/yuto76?tab=scraps">
          <a className="mr-7">
            <SiZenn />
          </a>
        </Link>
        <Link href="https://twitter.com/yuto_yy_76">
          <a className="mr-7">
            <FaTwitter />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
