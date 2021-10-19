import React from "react";
import fs from "fs";
import path from "path";

import type { InferGetStaticPropsType } from "next";
import serialize from "@Misc/serialize";
import Queue from "@Components/algos/queue";

const queue = ({
  codeHtml,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Queue html={[codeHtml]} />
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
