import type { AppProps } from "next/app";
import "@Root/styles/vs-code.css";
import "../styles/globals.css";
import Layout from "@Components/layouts";
import GlobalStore from "@Context/store";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStore>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </GlobalStore>
  );
}
export default MyApp;
