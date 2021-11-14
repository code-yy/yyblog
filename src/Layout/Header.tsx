import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export const Header = () => {
  return (
    <div>
      <header className="bg-gray-700 text-gray-50 py-3 flex justify-evenly items-center">
        <Link href="/">
          <a>
            <i className="ri-home-8-line text-4xl"></i>
          </a>
        </Link>
        <h1 className="text-4xl items-center font-bold">YY</h1>
        <Link href="https://github.com/Utopia300/Yutopage">
          <a>
            <div className="bg-hero-icon bg-cover p-6 rounded-full"></div>
          </a>
        </Link>
      </header>
    </div>
  );
};