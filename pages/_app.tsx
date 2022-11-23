import { Raleway } from "@next/font/google";

import Head from "next/head";

import type { AppProps } from "next/app";
import "../styles/global.scss";

const raleway = Raleway({ subsets: ["cyrillic", "latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Video chat</title>
      </Head>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
