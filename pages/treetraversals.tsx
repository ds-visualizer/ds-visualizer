import type { InferGetStaticPropsType } from "next";

import React from "react";
import fs from "fs";
import path from "path";
import TreeTraversals from "@Components/algos/TreeTraversal";
import serialize from "@Misc/serialize";
import Progress from "@Root/components/layouts/Progress";
import meta from "@Misc/Meta.json";
import Metadata from "@Root/components/layouts/Metadata";

const index = ({ html }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...meta.treetraversals}/>
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
