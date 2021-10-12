import React, { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Prism from "prismjs";
import "prismjs/themes/vs-code.css";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";
import "prismjs/components/prism-java.js";

interface Props {
  html: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Content: React.FC<Props> = ({ html }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div className="blog w-screen  xl:max-w-[1100px] 3xl:max-w-[1500px] overflow-hidden  mx-auto px-3 py-10 pb-20 text-gray-100">
      <MDXRemote {...html} />
    </div>
  );
};

export default Content;
