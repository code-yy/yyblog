import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import "remixicon/fonts/remixicon.css";

export const Profile = () => {
  return (
    <div>
      <main className="ml-10">
        <div className="block shadow rounded bg-gray-200 py-2 px-10 text-center mb-5">
          <div className="text-3xl font-bold p-3">Profile</div>
          <div className="bg-hero-pattern bg-cover p-10 rounded-full items-center" />
          {/* Github */}
          <Link href="https://github.com/Utopia300">
            <a className="flex shadow rounded bg-gray-700 py-2 px-7 my-6 items-center">
              <FaGithub className="text-2xl mr-2" />
              <div className="text-xl text-gray-100">GitHub</div>
            </a>
          </Link>
          {/* Zenn */}
          <Link href="https://zenn.dev/yuto76?tab=scraps">
            <a className="flex shadow rounded bg-blue-100 py-2 px-7 my-6 items-center">
              <SiZenn className="text-2xl mr-2 text-blue-400" />
              <div className="text-xl">Zenn</div>
            </a>
          </Link>
          {/* Twitter */}
          <Link href="https://twitter.com/yuto_yy_76">
            <a className="flex shadow rounded bg-blue-300 py-2 px-7 my-6 items-center">
              <FaTwitter className="text-2xl mr-2 text-blue-500" />
              <div className="text-xl">Twitter</div>
            </a>
          </Link>
          {/* Profile */}
          <Link href="/Profile">
            <a className="items-center flex shadow rounded bg-red-300 py-2 px-7 my-3">
              <i className="ri-profile-line mr-2 text-2xl text-red-500"></i>
              <div className="text-xl">Profile</div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};
