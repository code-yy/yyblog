import Link from "next/link";
import type { VFC } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

const items = [
  {
    href: "https://github.com/code-yy",
    icon: <FaGithub />,
  },
  {
    href: "https://zenn.dev/yuto76",
    icon: <SiZenn />,
  },
  {
    href: "https://twitter.com/yuto_yy_76",
    icon: <FaTwitter />,
  },
];

export const Footer: VFC = () => {
  return (
    <div className="py-5 text-center text-gray-50 bg-gray-700">
      <div className="flex justify-center items-center text-4xl">
        {items.map(({ href, icon }) => {
          return (
            <Link key={href} href={href}>
              <a className="mr-3">{icon}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
