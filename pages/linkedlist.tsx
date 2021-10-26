import type { InferGetStaticPropsType } from "next";
import LinkedList from "@Components/algos/LinkedList";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";

// @ts-ignore
import remarkCodeTitle from "remark-code-titles";
import React from "react";
import Progress from "@Root/components/layouts/Progress";
import Metadata from "@Root/components/layouts/Metadata";

const Index = ({
  html,
  codeHTML,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata title="Linked List" />

      <LinkedList html={html} codeHTML={codeHTML} />
      <Progress />
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.resolve(
    process.cwd(),
    "content/linkedlist/linkedlist.mdx"
  );
  const codePath = path.resolve(
    process.cwd(),
    "content/linkedlist/linkedlist-code.mdx"
  );
  const data = fs.readFileSync(filePath, "utf-8");
  const information = await serialize(data, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
    },
  });

  let code = fs.readFileSync(codePath, "utf-8");
  let codeHTML = await serialize(code, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
    },
  });

  return {
    props: { html: information, codeHTML },
  };
};

export default Index;
