import React from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Components/layouts/Content";

interface Props {
  html: mdxHtml[];
}

const index: React.FC<Props> = ({ html }) => {
  return (
    <div className="">
      <Content html={html[0]} />
    </div>
  );
};

export default index;
