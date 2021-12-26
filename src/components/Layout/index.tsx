import { FC } from "react";
import Head from "next/head";
import { Profiles } from "../model/Profile";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: any;
  title: string | undefined;
};

export const Layout: FC<Props> = (props) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/Profile/アルカ.PNG" />
      </Head>
      <header>
        <Header />
      </header>
      <div className="lg:flex lg:justify-center px-4 lg:px-64 py-8 text-gray-800 bg-gray-50">
        <main className="block p-3 lg:w-2/3 bg-gray-200 rounded-lg border border-gray-100 shadow-sm">
          {props.children}
        </main>
        <Profiles />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
