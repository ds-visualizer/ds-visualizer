import { GetStaticProps } from "next";
import React from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Root/components/layouts/Content";

interface Props {
  content: mdxHtml;
}

const ContentHtml: React.FC<Props> = ({ content }) => {
  return <Content html={content} />;
};

export default ContentHtml;
