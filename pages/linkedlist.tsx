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
  metaData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...metaData} />

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
  const metaData = await import("@Misc/Meta.json");

  return {
    props: { html: information, codeHTML, metaData: metaData.linkedlist },
  };
};

export default Index;
