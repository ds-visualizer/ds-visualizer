import React, { useState } from "react";
import Code from "./Code";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ExampleOne from "./ExampleOne";

interface Props {
  html: MDXRemoteSerializeResult<Record<string, unknown>>[];
}

const index: React.FC<Props> = ({ html }) => {
  const [content, example, exampleCode] = html;
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="fixed z-20 rounded top-20 right-5 px-4 py-2 bg-black text-white"
      >
        {toggle ? "Example" : "Code"}
      </button>
      {toggle ? (
        <Code html={content} />
      ) : (
        <ExampleOne html={example} exampleCode={exampleCode} />
      )}
    </div>
  );
};

export default index;
