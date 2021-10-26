import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import BinaryTree from "@Components/algos/BinaryTree";
import Head from "next/head";

import fs from "fs";
import path from "path";
import serialize from "@Misc/serialize";
import Progress from "@Root/components/layouts/Progress";

const binarytree = ({
  contentHtml,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Binary Tree</title>
      </Head>
      <BinaryTree htmlContent={[contentHtml]} />
      <Progress />
    </>
  );
};

export default binarytree;

export const getStaticProps = async () => {
  const contentMdx = fs.readFileSync(
    path.resolve(process.cwd(), "content/Tree", "BST-code.mdx"),
    "utf-8"
  );
  let contentHtml = await serialize(contentMdx);

  return {
    props: { contentHtml },
  };
};
