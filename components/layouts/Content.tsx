import React, { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Prism from "prismjs";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";
import "prismjs/components/prism-java.js";

interface Props {
  html: MDXRemoteSerializeResult<Record<string, unknown>>;
  className?: string;
}

const Content: React.FC<Props> = ({ html, className }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div
      className={`blog w-screen  max-w-[1000px] overflow-hidden  mx-auto px-3 py-10 pb-20 text-gray-100 ${className}`}
    >
      <MDXRemote {...html} />
    </div>
  );
};

export default Content;
