import Content from "@Root/components/layouts/Content";
import React from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";

interface Props {
  html: Array<mdxHtml>;
}

const index: React.FC<Props> = ({ html }) => {
  return (
    <div className="">
      <Content html={html[0]} />
    </div>
  );
};

export default index;
