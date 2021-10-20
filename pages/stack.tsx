import React from "react";
import type { InferGetStaticPropsType } from "next";
import Stack from "@Components/algos/Stack";
import path from "path";
import fs from "fs";
import serialize from "@Misc/serialize";
import Head from "next/head";

const stack = ({
  html,
  codeExample,
  exampleCodeHtml,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Stack</title>
      </Head>
      <Stack html={[html, codeExample, exampleCodeHtml]} />
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

  const exampleCode = path.resolve(
    process.cwd(),
    "content/stack/bracket-code.mdx"
  );

  const codeExample = await serialize(
    fs.readFileSync(codeExamplePath, "utf-8")
  );

  const exampleCodeHtml = await serialize(
    fs.readFileSync(exampleCode, "utf-8")
  );
  return {
    props: { html, codeExample, exampleCodeHtml },
  };
};

export default stack;
