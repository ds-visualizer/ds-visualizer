import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import LinkedList from "@Components/algos/LinkedList";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";

// @ts-ignore
import remarkCodeTitle from "remark-code-titles";

const Index = ({
  html,
  codeHTML,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Linked List</title>
      </Head>
      <LinkedList html={html} codeHTML={codeHTML} />
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
