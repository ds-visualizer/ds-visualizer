import React, { useEffect, useState, useRef } from "react";
import HtmlComponent from "./HtmlComponent";
import MdxComponent from "./MdxComponent";
import mdxHtml from "@Root/interface/mdxHtmlType";
import * as marked from "marked";

interface Props {}

const index: React.FC<Props> = () => {
  if (process.env.NODE_ENV == "production") return null;
  if (process.env.NODE_ENV == "test") return null;

  const [mdxContent, setMdxContent] = useState<string>("");
  const mdxRef = useRef<HTMLTextAreaElement>(null);
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    setHtmlContent(marked.marked(mdxContent));
  }, [mdxContent]);

  return (
    <div className="flex px-[2rem] mt-[2rem] justify-between">
      <HtmlComponent htmlContent={htmlContent} />

      <MdxComponent ref={mdxRef} setMdxContent={setMdxContent} />
    </div>
  );
};

export default index;
