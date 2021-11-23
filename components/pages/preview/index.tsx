import React, { useEffect, useState, useRef } from "react";
import HtmlComponent from "./HtmlComponent";
import MdxComponent from "./MdxComponent";
import mdxHtml from "@Root/interface/mdxHtmlType";
import * as marked from "marked";
import Buttons from "@Components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";

interface Props {}
type Mode = "Preview" | "Markdown" | "Side";

const index: React.FC<Props> = () => {
  const [mdxContent, setMdxContent] = useState<string>("");
  const mdxRef = useRef<HTMLTextAreaElement>(null);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [mode, setMode] = useState<Mode>("Side");

  useEffect(() => {
    setHtmlContent(marked.marked(mdxContent));
  }, [mdxContent]);

  const onClick = (type: Mode) => {
    setMode(type);
  };

  return (
    <div>
      <Buttons>
        <Button
          onClick={() => {
            onClick("Side");
          }}
          content="Side"
        />
        <Button
          onClick={() => {
            onClick("Preview");
          }}
          content="Preview"
        />
        <Button
          onClick={() => {
            onClick("Markdown");
          }}
          content="Markdown"
        />
      </Buttons>
      {mode == "Side" && (
        <div className="flex px-[2rem] mt-[2rem] justify-between">
          <div className="w-[47vw] h-screen overflow-x-scroll">
            <HtmlComponent htmlContent={htmlContent} />
          </div>
          <div className="w-[47vw] h-screen overflow-x-scroll">
            <MdxComponent
              mdxContent={mdxContent}
              ref={mdxRef}
              setMdxContent={setMdxContent}
            />
          </div>
        </div>
      )}
      {mode == "Preview" && (
        <div className="max-w-[1000px] mx-auto mt-[2rem] min-h-screen">
          <HtmlComponent htmlContent={htmlContent} />
        </div>
      )}
      {mode == "Markdown" && (
        <div className="max-w-[1000px] mx-auto mt-[2rem] h-screen ">
          <MdxComponent
            mdxContent={mdxContent}
            ref={mdxRef}
            setMdxContent={setMdxContent}
          />
        </div>
      )}
    </div>
  );
};

export default index;
