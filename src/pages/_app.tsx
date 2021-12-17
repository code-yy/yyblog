import { AppProps } from "next/app";
import { Layout } from "src/components/layout";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
