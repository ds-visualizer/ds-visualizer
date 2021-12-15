import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import fs from "fs";
import path from "path";
import serialize from "@Misc/serialize";
import mdxHtml from "@Root/interface/mdxHtmlType";
import DynamicPages from "@Root/components/pages/algorithms/DynamicPages";
import { IMeta } from "@Root/interface/Meta";
import Metadata from "@Root/components/layouts/Metadata";

const id = ({
  codeHtml,
  questionHtml,
  meta,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Metadata {...meta} />
    <DynamicPages code={codeHtml} question={questionHtml} />
  </>
);

export const getServerSideProps: GetServerSideProps<{
  codeHtml: mdxHtml;
  questionHtml: mdxHtml;
  meta: IMeta;
}> = async ({ res, query }) => {
  //
  try {
    const basePath = path.resolve(process.cwd(), "algorithms");
    const files = fs.readdirSync(basePath, "utf-8");
    const { id } = query;

    if (typeof id != "string") throw new Error("invalid param");

    if (!files.includes(id)) throw new Error("Invalid param");

    res.setHeader("Cache-Control", "max-age=31536000");
    const filePath = basePath + "/" + id;

    // Reading files

    const code = fs.readFileSync(filePath + "/code.md", "utf-8");
    const question = fs.readFileSync(filePath + "/question.md", "utf-8");

    const meta = JSON.parse(
      fs.readFileSync(filePath + "/Meta.json", "utf-8")
    ) as IMeta;

    // Serializing it to html

    const codeHtml = await serialize(code);
    const questionHtml = await serialize(question);

    return {
      props: { codeHtml, questionHtml, meta },
    };
  } catch {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
};

export default id;
