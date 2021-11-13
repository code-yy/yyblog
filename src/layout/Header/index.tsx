import Head from "next/head";
import Link from "next/link";

type Props = {
  title?: string;
};

export const Header = ({ title = "YutoBlog" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <header className="bg-gray-700 text-center text-gray-50 py-3">
        <Link href="/">
          <a className="text-4xl items-center font-bold">YY</a>
        </Link>
      </header>
    </div>
  );
};
