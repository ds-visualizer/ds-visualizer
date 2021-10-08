import React, { useState } from "react";
import { useRouter } from "next/router";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  html: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Content: React.FC<Props> = ({ html }) => {
  return (
    <div className="content w-screen max-w-[1000px] overflow-hidden  mx-auto px-3 py-10 pb-20 text-gray-100">
      <MDXRemote {...html} />
    </div>
  );
};

export default Content;
