import React from "react";
import path from "path";
import type { InferGetStaticPropsType } from "next";
import htmlData from "@Root/misc/htmlData";
import HashMap from "@Components/algos/HashMap";
import Metadata from "@Root/components/layouts/Metadata";

const hashmap = ({ html }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata title="Hash Map" />
      <HashMap html={html} />
    </>
  );
};

export default hashmap;

export const getStaticProps = async () => {
  const pathUrl = path.resolve(process.cwd(), "content/hashMap/code.md");
  const html = await htmlData(pathUrl);

  return {
    props: { html: [html] },
  };
};
