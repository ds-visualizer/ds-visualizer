import type { AppProps } from "next/app";
import "@Root/styles/vs-code.css";
import "../styles/globals.css";
import Layout from "@Components/layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Component {...pageProps} />
      </>
    </Layout>
  );
}
export default MyApp;
