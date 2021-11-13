import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

export const Card = () => {
  return (
    <div className="flex justify-center">
      <Link href="https://zenn.dev/yuto76?tab=scraps">
        <a className="flex shadow rounded bg-blue-200 py-8 px-20 my-6 items-center mx-4 hover:bg-blue-100">
          <SiZenn className="text-4xl mr-2 text-blue-400" />
          <div className="text-3xl font-bold">Zenn</div>
        </a>
      </Link>
      <Link href="https://github.com/Utopia300">
        <a className="flex shadow rounded bg-gray-600 py-4 px-20 my-6 items-center mx-4 hover:bg-gray-500">
          <FaGithub className="text-4xl mr-2" />
          <div className="text-3xl text-white font-bold">GitHub</div>
        </a>
      </Link>
      <Link href="https://twitter.com/yuto_yy_76">
        <a className="flex shadow rounded bg-blue-300 py-8 px-20 my-6 items-center mx-4 hover:bg-blue-200">
          <FaTwitter className="text-4xl mr-2 text-blue-500" />
          <div className="text-3xl font-bold">Twitter</div>
        </a>
      </Link>
    </div>
  );
};
