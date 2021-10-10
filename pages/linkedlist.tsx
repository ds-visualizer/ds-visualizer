import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import LinkedList from "@Components/algos/LinkedList";
import { serialize } from "next-mdx-remote/serialize";
import Content from "@Components/layouts/Content";
import path from "path";
import fs from "fs";

// @ts-ignore
import remarkCodeTitle from "remark-code-titles";

const Index = ({ html }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Linked List</title>
      </Head>
      <LinkedList html={html} />
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.resolve(process.cwd(), "content/linkedlist.mdx");
  const data = fs.readFileSync(filePath, "utf-8");
  const html = await serialize(data, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
    },
  });

  return {
    props: { html },
  };
};

export default Index;
