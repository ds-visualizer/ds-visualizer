import React from "react";
import Head from "next/head";
import SelectSort from "../components/algos/SelectionSort";

import type { InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import serialize from "@Misc/serialize";
import Metadata from "@Root/components/layouts/Metadata";
import meta from "@Misc/Meta.json";

const SelectionSort = ({
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata {...meta.SelectionSort} />
      <SelectSort html={html} />
    </>
  );
};

export const getStaticProps = async () => {
  const mdxPath = path.resolve(process.cwd(), "content/SelectionSort/code.md");

  const mdxContent = fs.readFileSync(mdxPath, "utf-8");
  const htmlContent = await serialize(mdxContent);

  return {
    props: {
      html: [htmlContent],
    },
  };
};

export default SelectionSort;
