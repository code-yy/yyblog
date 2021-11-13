import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <body className="bg-gray-100">
      <Component {...pageProps} />
    </body>
  );
}
