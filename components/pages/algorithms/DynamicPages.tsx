import React, { useState } from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Root/components/layouts/Content";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";

interface Props {
  code: mdxHtml;
  question: mdxHtml;
}

const DynamicPages: React.FC<Props> = ({ code, question }) => {
  const [currentTab, setTab] = useState<"Question" | "Code">("Question");

  return (
    <div>
      <Buttons>
        <Button
          content="Question"
          onClick={() => {
            setTab("Question");
          }}
        />
        <Button
          content="Code"
          onClick={() => {
            setTab("Code");
          }}
        />
      </Buttons>
      <Content html={currentTab == "Question" ? question : code} />
    </div>
  );
};

export default DynamicPages;
