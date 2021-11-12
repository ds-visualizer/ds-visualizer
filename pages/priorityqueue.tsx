import React from "react";
import type { InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import serialize from "@Misc/serialize";
import PriorityQueue from "@Components/algos/PriorityQueue";
import Metadata from "@Root/components/layouts/Metadata";
import meta from "@Misc/Meta.json";
import Progress from "@Root/components/layouts/Progress";

const priorityqueue = ({
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...meta.priorityqueue} />
      <PriorityQueue html={html} />
      <Progress/>
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.resolve(process.cwd(), "content/priorityQueue/code.md");
  const mdxContent = fs.readFileSync(filePath, "utf-8");

  const htmlContent = await serialize(mdxContent);
  return {
    props: {
      html: [htmlContent],
    },
  };
};

export default priorityqueue;
