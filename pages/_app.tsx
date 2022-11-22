import { Raleway } from "@next/font/google";

import type { AppProps } from "next/app";
import "../styles/global.scss";

const raleway = Raleway({ subsets: ["cyrillic", "latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
