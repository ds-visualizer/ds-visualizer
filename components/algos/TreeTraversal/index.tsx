import React from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import ContentHtml from "./ContentHtml";

interface Props {
  html: mdxHtml[];
}

const index: React.FC<Props> = ({ html }) => {
  return (
    <div className="">
      <div>
        <ContentHtml content={html[0]} />
      </div>
    </div>
  );
};

export default index;
