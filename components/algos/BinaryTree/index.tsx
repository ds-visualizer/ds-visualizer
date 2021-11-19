import React, { useRef } from "react";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Components/layouts/Input";
import Buttons from "@Components/layouts/Buttons";
import Button from "@Components/layouts/Button";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Components/layouts/Content";

import Node from "./Node";
import insert from "./insert";
import useBinaryTree from "@Root/hooks/useBinaryTree";

interface Props {
  htmlContent: mdxHtml[];
}

let root: { root: Node<number> | null } = { root: null };

const index: React.FC<Props> = ({ htmlContent }) => {
  const { renderTree, tree } = useBinaryTree(root);

  const inputRef = useRef<HTMLInputElement>(null);

  const [codeHtml] = htmlContent;

  return (
    <div className="overflow-hidden">
      <OptionBackground>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            insert(parseInt(inputRef.current?.value || "0"), root, renderTree);
            inputRef.current!.value = "";
          }}
        >
          <Input ref={inputRef} content="Enter your value:" />
          <Buttons>
            <Button type="submit" content="Insert" />
          </Buttons>
        </form>
      </OptionBackground>
      <div className="w-screen min-h-[50vh] overflow-hidden flex justify-center pt-20">
        <div className="overflow-hidden">
          <AnimatePresence>
            <AnimateSharedLayout>{tree}</AnimateSharedLayout>
          </AnimatePresence>
        </div>
      </div>
      <Content html={codeHtml} />
    </div>
  );
};

export default index;
