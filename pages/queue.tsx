import React from "react";
import fs from "fs";
import path from "path";

import type { InferGetStaticPropsType } from "next";
import serialize from "@Misc/serialize";
import Queue from "@Components/algos/queue";
import Progress from "@Root/components/layouts/Progress";
import Metadata from "@Root/components/layouts/Metadata";

const queue = ({
  codeHtml,
  metaData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...metaData} />

      <Queue html={[codeHtml]} />
      <Progress />
    </>
  );
};

export default queue;

export const getStaticProps = async () => {
  const codePath = path.resolve(
    process.cwd(),
    "content/queue/code-linkedlist.mdx"
  );

  const mdx = fs.readFileSync(codePath, "utf-8");

  const codeHtml = await serialize(mdx);
  const metaData = await import("@Misc/Meta.json");

  return {
    props: { codeHtml, metaData: metaData.queue },
  };
};
