import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import "remixicon/fonts/remixicon.css";

export const Profiles = () => {
  return (
    <div className="ml-10">
      <div className="block shadow rounded bg-gray-200 py-6 px-10 text-center">
        <div className="text-3xl font-bold p-3">Profile</div>
        <div className="bg-hero-pattern bg-cover p-10 rounded-full items-center" />
        <Link href="https://github.com/Utopia300">
          <a className="flex shadow rounded bg-gray-600 py-2 px-7 my-6 items-center hover:bg-gray-500">
            <FaGithub className="text-2xl mr-2" />
            <div className="text-xl text-gray-100">GitHub</div>
          </a>
        </Link>
        <Link href="https://zenn.dev/yuto76?tab=scraps">
          <a className="flex shadow rounded bg-blue-200 py-2 px-7 my-6 items-center hover:bg-blue-100">
            <SiZenn className="text-2xl mr-2 text-blue-400" />
            <div className="text-xl">Zenn</div>
          </a>
        </Link>
        <Link href="https://twitter.com/yuto_yy_76">
          <a className="flex shadow rounded bg-blue-300 py-2 px-7 my-6 items-center hover:bg-blue-200">
            <FaTwitter className="text-2xl mr-2 text-blue-500" />
            <div className="text-xl">Twitter</div>
          </a>
        </Link>
        <Link href="/profiles">
          <a className="items-center flex shadow rounded bg-red-300 py-2 px-7 my-6 hover:bg-red-200">
            <i className="ri-profile-line mr-2 text-2xl text-red-500"></i>
            <div className="text-xl">Profile</div>
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="items-center flex shadow rounded bg-green-300 py-2 px-7 my-3 hover:bg-green-200">
            <i className="ri-shield-user-line mr-2 text-2xl text-green-500"></i>
            <div className="text-xl">Portfolio</div>
          </a>
        </Link>
      </div>
    </div>
  );
};
