import { FC } from "react";
import Head from "next/head";
import { Profiles } from "../model/Profile";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRouter } from "next/dist/client/router";

type Props = {
  meta?: {
    pageName?: string;
    description?: string;
    ogImagePath?: string;
  };
  children: any;
  title: string | undefined;
};

export const Layout: FC<Props> = (props) => {
  const router = useRouter();
  const meta = {
    title: props.meta?.pageName ? `${props.meta.pageName} | まよブログ` : "まよブログ",
    description: props.meta?.description
      ? `${props.meta.description}`
      : "プログラミングに関する技術知識を発信するブログです。",
    ogImagePath: props.meta?.ogImagePath ? props.meta.ogImagePath : "",
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/Profile/アルカ.PNG" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://yyblog.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content="技術知識のアウトプットブログ。" />
        <meta property="og:site_name" content="yyblog" />
        <meta property="og:image" content={meta.ogImagePath} />

        {/* Twitter */}
        <meta name="twitter:card" content="Summary Card" />
        <meta name="twitter:site" content="@yuto_yy_76" />
        <meta name="twitter:image" content={meta.ogImagePath} />

        {/* PWA */}
        <link rel="apple-touch-icon" type="image/png" href="/pwa/icons/apple-touch-icon-180x180.png" />
        <link rel="icon" sizes="512x512" href="/pwa/icons/icon-512x512.png" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/pwa/manifest.json" />

        <meta name="msapplication-square70x70logo" content="/pwa/icons/site-tile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/pwa/icons/site-tile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/pwa/icons/site-tile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/pwa/icons/site-tile-310x310.png" />
        <meta name="msapplication-TileColor" content="#000" />
        {/* Safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
        <meta name="apple-mobile-web-app-title" content="myapp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/pwa/icons/apple-touch-icon-180x180.png" />
        {/* 一般 */}
        <meta name="application-name" content="App Name" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content="app description" />
        <link rel="icon" sizes="512x512" href="/pwa/icons/icon-512x512.png" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/pwa/manifest.json" />
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
