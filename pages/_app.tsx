import { Raleway } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

const raleway = Raleway();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
