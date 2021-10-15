import React from "react";
import type { InferGetStaticPropsType } from "next";
import Stack from "@Components/algos/Stack";
import path from "path";
import fs from "fs";
import serialize from "@Misc/serialize";

const stack = ({ html }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Stack html={html} />
    </>
  );
};

export const getStaticProps = async () => {
  const codePath = path.resolve(process.cwd(), "content/stack/code.mdx");
  const mdx = fs.readFileSync(codePath, "utf-8");
  const html = await serialize(mdx);
  return {
    props: { html },
  };
};

export default stack;
