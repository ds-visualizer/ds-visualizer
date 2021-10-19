import React from "react";
import type { InferGetStaticPropsType } from "next";
import Stack from "@Components/algos/Stack";
import path from "path";
import fs from "fs";
import serialize from "@Misc/serialize";

const stack = ({
  html,
  codeExample,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Stack html={[html, codeExample]} />
    </>
  );
};

export const getStaticProps = async () => {
  const codePath = path.resolve(process.cwd(), "content/stack/code.mdx");
  const mdx = fs.readFileSync(codePath, "utf-8");
  const html = await serialize(mdx);
  const codeExamplePath = path.resolve(
    process.cwd(),
    "content/stack/bracket_pair.mdx"
  );
  const codeExample = await serialize(
    fs.readFileSync(codeExamplePath, "utf-8")
  );
  return {
    props: { html, codeExample },
  };
};

export default stack;
