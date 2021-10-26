import React from "react";
import fs from "fs";
import path from "path";

import type { InferGetStaticPropsType } from "next";
import serialize from "@Misc/serialize";
import Queue from "@Components/algos/queue";
import Head from "next/head";
import Progress from "@Root/components/layouts/Progress";

const queue = ({
  codeHtml,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Queue</title>
      </Head>
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

  return {
    props: { codeHtml },
  };
};
