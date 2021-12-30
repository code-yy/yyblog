import Link from "next/link";
import { VFC } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import "remixicon/fonts/remixicon.css";

const ProfileLayout = "flex shadow rounded py-2 px-7 my-6 items-center";

const items = [
  {
    href: "https://github.com/Utopia300",
    label: <div className="text-xl text-gray-100">GitHub</div>,
    icon: <FaGithub className="text-2xl mr-2" />,
    className: `${ProfileLayout} bg-gray-600 hover:bg-gray-500`,
  },
  {
    href: "https://zenn.dev/yuto76?tab=scraps",
    label: "Zenn",
    icon: <SiZenn className="text-2xl mr-2 text-blue-400" />,
    className: `${ProfileLayout}  bg-blue-200 hover:bg-blue-100`,
  },
  {
    href: "https://twitter.com/yuto_yy_76",
    label: "Twitter",
    icon: <FaTwitter className="text-2xl mr-2 text-blue-500" />,
    className: `${ProfileLayout} bg-blue-200 hover:bg-blue-300`,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: <i className="ri-profile-line mr-2 text-2xl text-red-500"></i>,
    className: `${ProfileLayout} bg-red-300 hover:bg-red-200`,
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    icon: <i className="ri-shield-user-line mr-2 text-2xl text-green-500"></i>,
    className: `${ProfileLayout} bg-green-300 hover:bg-green-200`,
  },
];

export const Profiles: VFC = () => {
  return (
    <div className="ml-10">
      <div className="block shadow rounded bg-gray-200 py-6 px-10 text-center">
        <div className="text-3xl font-bold p-3">Profile</div>
        <div className="bg-hero-pattern bg-cover p-10 rounded-full items-center" />
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
