import type { InferGetStaticPropsType } from "next";
import React from "react";
import path from "path";
import HashSet from "@Components/algos/HashSet";
import htmlData from "@Root/misc/htmlData";
import Metadata from "@Root/components/layouts/Metadata";

const hashset = ({ html }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata title="Hash Set" />
      <HashSet html={html} />
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "content/set/code.md");
  const html = await htmlData(filePath);

  return {
    props: { html: [html] },
  };
};

export default hashset;
