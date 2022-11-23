import { Raleway } from "@next/font/google";

import Head from "next/head";

import { Provider } from "react-redux";

import store from "../src/store";

import type { AppProps } from "next/app";
import "../styles/global.scss";

const raleway = Raleway({ subsets: ["cyrillic", "latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Video chat</title>
      </Head>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
