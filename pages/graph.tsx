import type { InferGetStaticPropsType, NextPage } from "next";

import React from "react";
import fs from "fs";
import path from "path";

import Graph from "@Components/algos/graph";
import serialize from "@Misc/serialize";
import Progress from "@Root/components/layouts/Progress";
import Metadata from "@Root/components/layouts/Metadata";

const graph = ({
  graphCodeHTML,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata title="Graph" />

      <Graph html={[graphCodeHTML]} />
      <Progress />
    </>
  );
};

export default graph;

export const getStaticProps = async () => {
  const blogPath = path.resolve(process.cwd(), "content/graph");
  const graphCodeMDX = fs.readFileSync(blogPath + "/graph-code.md", "utf-8");
  const graphCodeHTML = await serialize(graphCodeMDX);
  return { props: { graphCodeHTML } };
};
