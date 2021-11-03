import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import metaData from "@Misc/Meta.json";
import Metadata from "@Components/layouts/Metadata";
import GraphTraversals from "@Root/components/algos/GraphTraversals";
import path from "path";
import fs from "fs";
import serialize from "@Misc/serialize";
import Progress from "@Components/layouts/Progress";

const index = ({
  htmlContent,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...metaData.graphtraversals} />
      <GraphTraversals html={htmlContent} />
      <Progress />
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.resolve(
    process.cwd(),
    "content/GraphTraversals/code.md"
  );

  const mdx = fs.readFileSync(filePath, "utf-8");
  const htmlCode = await serialize(mdx);

  return {
    props: {
      htmlContent: [htmlCode],
    },
  };
};

export default index;
