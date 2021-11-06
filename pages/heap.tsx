import React from "react";
import type { InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import serialize from "@Misc/serialize";

import Heap from "@Components/algos/Heap";
import Progress from "@Components/layouts/Progress";
import Metadata from "@Root/components/layouts/Metadata";

import meta from "@Misc/Meta.json";

const heap = ({ html }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...meta.heap} />
      <Heap html={html} />
      <Progress />
    </>
  );
};

export const getStaticProps = async () => {
  const mdxPath = path.resolve(process.cwd(), "content/heap/code.md");

  const mdxContent = fs.readFileSync(mdxPath, "utf-8");
  const htmlContent = await serialize(mdxContent);

  return {
    props: {
      html: [htmlContent],
    },
  };
};

export default heap;
