import "remixicon/fonts/remixicon.css";

import Link from "next/link";
import type { VFC } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

const ProfileLayout = "flex shadow rounded py-2 px-7 my-6 items-center";

const items = [
  {
    href: "https://github.com/Utopia300",
    label: <div className="text-xl text-gray-100">GitHub</div>,
    icon: <FaGithub className="mr-2 text-2xl" />,
    className: `${ProfileLayout} bg-gray-600 hover:bg-gray-500`,
  },
  {
    href: "https://zenn.dev/yuto76?tab=scraps",
    label: "Zenn",
    icon: <SiZenn className="mr-2 text-2xl text-blue-400" />,
    className: `${ProfileLayout}  bg-blue-200 hover:bg-blue-100`,
  },
  {
    href: "https://twitter.com/yuto_yy_76",
    label: "Twitter",
    icon: <FaTwitter className="mr-2 text-2xl text-blue-500" />,
    className: `${ProfileLayout} bg-blue-200 hover:bg-blue-300`,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: <i className="mr-2 text-2xl text-red-500 ri-profile-line"></i>,
    className: `${ProfileLayout} bg-red-300 hover:bg-red-200`,
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    icon: <i className="mr-2 text-2xl text-green-500 ri-shield-user-line"></i>,
    className: `${ProfileLayout} bg-green-300 hover:bg-green-200`,
  },
];

export const Profiles: VFC = () => {
  return (
    <div className="ml-10">
      <div className="block py-6 px-10 text-center bg-gray-200 rounded shadow">
        <div className="p-3 text-3xl font-bold">Profile</div>
        <div className="items-center p-10 bg-cover bg-hero-pattern rounded-full" />
        {items.map(({ href, label, icon, className }) => {
          return (
            <Link key={href} href={href}>
              <a className={className}>
                {icon}
                <div className="text-xl">{label}</div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
