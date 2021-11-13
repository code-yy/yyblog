import Head from "next/head";

type Props = {
  title?: string;
};

const Header = ({ title = "YutoBlog" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <header className="bg-gray-700 text-center text-gray-50 py-3">
        <div className="text-4xl items-center">YY</div>
      </header>
    </div>
  );
};

export default Header;
