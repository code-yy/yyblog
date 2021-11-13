import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

const Profile = () => {
  return (
    <div>
      <main className="ml-12">
        <div className="block shadow rounded bg-gray-100 py-2 px-10 my-6 text-center">
          <div className="text-3xl font-bold mt-5 p-5">Profile</div>
          <div className="bg-hero-pattern bg-cover p-10 rounded-full items-center" />
          {/* Github */}
          <Link href="https://github.com/Utopia300">
            <a className="flex shadow rounded bg-gray-100 py-2 px-7 my-6 items-center">
              <FaGithub className="text-2xl mr-2" />
              <div className="text-xl">GitHub</div>
            </a>
          </Link>
          {/* Zenn */}
          <Link href="https://zenn.dev/yuto76?tab=scraps">
            <a className="flex shadow rounded bg-gray-100 py-2 px-7 my-6 items-center">
              <SiZenn className="text-2xl mr-2 text-blue-400" />
              <div className="text-xl">Zenn</div>
            </a>
          </Link>
          {/* Twitter */}
          <Link href="https://twitter.com/yuto_yy_76">
            <a className="flex shadow rounded bg-gray-100 py-2 px-7 my-6 items-center">
              <FaTwitter className="text-2xl mr-2 text-blue-500" />
              <div className="text-xl">Twitter</div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Profile;
