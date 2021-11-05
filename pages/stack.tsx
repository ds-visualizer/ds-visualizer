import React from "react";
import type { InferGetStaticPropsType } from "next";
import Stack from "@Components/algos/Stack";
import path from "path";
import fs from "fs";
import serialize from "@Misc/serialize";
import Progress from "@Root/components/layouts/Progress";
import Metadata from "@Root/components/layouts/Metadata";

const stack = ({
  html,
  codeExample,
  exampleCodeHtml,
  metaData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...metaData} />

      <Stack html={[html, codeExample, exampleCodeHtml]} />
      <Progress />
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

  const metaData = await import("@Misc/Meta.json");

  return {
    props: { metaData: metaData.stack, html, codeExample, exampleCodeHtml },
  };
};

export default stack;
