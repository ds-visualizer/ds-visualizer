import React from "react";
import type { NextPage } from "next";

import Graph from "@Components/algos/graph";
import Head from "next/head";

const graph: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graph</title>
      </Head>
      <Graph />
    </>
  );
};

export default graph;
