import type { AppProps } from "next/app";
import "@Root/styles/vs-code.css";
import "../styles/globals.css";
import Layout from "@Components/layouts";
import Metadata from "@Root/components/layouts/Metadata";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Metadata title="Ds-Visualizer" />
        <Component {...pageProps} />
      </>
    </Layout>
  );
}
export default MyApp;
