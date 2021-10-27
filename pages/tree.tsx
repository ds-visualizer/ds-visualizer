import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import Metadata from "@Components/layouts/Metadata";
import serialize from "@Misc/serialize";
import fs from "fs";
import Tree from "@Components/algos/Tree";
import path from "path";

const tree = ({
  html,
  metadata,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...metadata} />
      <Tree html={html} />
    </>
  );
};

export const getStaticProps = async () => {
  const metadata = await import("@Misc/Meta.json");
  const mdx = fs.readFileSync(
    path.resolve(process.cwd(), "content/Tree/Tree-code.md"),
    "utf-8"
  );
  const html = await serialize(mdx);
  return {
    props: {
      metadata: metadata.tree,
      html: [html],
    },
  };
};

export default tree;
