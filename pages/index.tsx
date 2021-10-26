import Head from "next/head";
import Home from "@Root/components/pages/Home";

export default function index() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
