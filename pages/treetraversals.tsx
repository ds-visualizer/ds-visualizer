import type { InferGetStaticPropsType } from "next";

import React from "react";
import fs from "fs";
import path from "path";
import TreeTraversals from "@Components/algos/TreeTraversal";
import serialize from "@Misc/serialize";
import Progress from "@Root/components/layouts/Progress";

const index = ({ html }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <TreeTraversals html={html} />
      <Progress />
    </>
  );
};

export const getStaticProps = async () => {
  const mdx = fs.readFileSync(
    path.resolve(process.cwd(), "content/TreeTraversals/code.md"),
    "utf-8"
  );

  const codeHtml = await serialize(mdx);
  return {
    props: { html: [codeHtml] },
  };
};

export default index;
