import type { NextPage } from "next";
import Head from "next/head";
import LinkedList from "@Components/algos/LinkedList";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Linked List</title>
      </Head>
      <LinkedList />
    </>
  );
};

export default Index;
