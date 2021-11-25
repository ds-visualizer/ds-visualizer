import React, { useEffect, useState } from "react";
import * as marked from "marked";
import HtmlComponent from "./HtmlComponent";
import MdxComponent from "./MdxComponent";
import Buttons from "@Components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";

interface Props {}
type Mode = "Preview" | "Markdown" | "Side";

const index: React.FC<Props> = () => {
  const [mdxContent, setMdxContent] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [mode, setMode] = useState<Mode>("Side");

  useEffect(() => {
    setHtmlContent(marked.marked(mdxContent));
  }, [mdxContent]);

  const onClick = (type: Mode) => setMode(type);

  return (
    <div>
      <Buttons>
        <label className="btn border-gray-500 cursor-pointer text-gray-100">
          Select File
          <input
            className="hidden"
            accept=".md, .mdx"
            type="file"
            onChange={(e) => {
              if (!e.target.files?.length) return;

              const reader = new FileReader();
              reader.readAsText(e.target.files[0]);
              reader.onload = () =>
                setMdxContent((reader.result as string) || "");
            }}
          />
        </label>
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
          <MdxComponent mdxContent={mdxContent} setMdxContent={setMdxContent} />
        </div>
      )}

      <div className="px-[10rem] flex justify-end my-[2rem]">
        <Button
          content="Save"
          onClick={() => {
            const file = new Blob([mdxContent], {
              type: "text/plain",
            });

            const url = URL.createObjectURL(file);
            const link = document.createElement("a");
            link.href = url;
            link.download = "content.md";
            link.click();
          }}
        />
      </div>
    </div>
  );
};

export default index;
