import Head from "next/head";
import type { FC, ReactNode } from "react";

import { Profiles } from "../model/Profile";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: FC<Props> = (props) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/アルカ.PNG" />
      </Head>
      <body>
        <header>
          <Header />
        </header>
        <div className="py-8 px-4 text-gray-800 bg-gray-50 lg:flex lg:justify-center lg:px-64">
          <main className="block p-3 min-h-[78.3vh] bg-gray-200 rounded-lg border border-gray-100 shadow-sm lg:w-2/3">
            {props.children}
          </main>
          <Profiles />
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </div>
  );
};
