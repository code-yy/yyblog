import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { FC } from "react";

import { Profiles } from "../model/Profile";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  meta?: {
    pageName?: string;
    description?: string;
    image?: string;
  };
};

export const Seo: FC<Props> = (props) => {
  const router = useRouter();
  const meta = {
    title: props.meta?.pageName,
    description: props.meta?.description,
    image: props.meta?.image,
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://yyblog.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="技術知識のアウトプットブログ。" />
        <meta property="og:site_name" content="yyblog" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yuto_yy_76" />
        <link rel="icon" href="/アルカ.PNG" />
      </Head>
      <header>
        <Header />
      </header>
      <div className="py-8 px-4 text-gray-800 bg-gray-50 lg:flex lg:justify-center lg:px-64">
        <main className="block p-3 bg-gray-200 rounded-lg border border-gray-100 shadow-sm lg:w-2/3">
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
