import Link from "next/link";
import { VFC } from "react";
import { SiZenn } from "react-icons/si";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const Footer: VFC = () => {
  return (
    <div className="bg-gray-700 text-center text-gray-50 py-5">
      <div className="text-4xl items-center flex justify-center">
        <Link href="https://github.com/Utopia300">
          <a className="mr-3">
            <FaGithub />
          </a>
        </Link>
        <Link href="https://zenn.dev/yuto76?tab=scraps">
          <a className="mr-3">
            <SiZenn />
          </a>
        </Link>
        <Link href="https://twitter.com/yuto_yy_76">
          <a className="mr-3">
            <FaTwitter />
          </a>
        </Link>
      </div>
    </div>
  );
};
