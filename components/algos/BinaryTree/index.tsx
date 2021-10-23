import React, { useEffect, useRef, useState } from "react";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Components/layouts/Input";
import Buttons from "@Components/layouts/Buttons";
import Button from "@Components/layouts/Button";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Components/layouts/Content";

import Node from "./Node";
import render from "./render";
import height from "./height";

interface Props {
  htmlContent: mdxHtml[];
}

let root: Node<number> | null = null;

const index: React.FC<Props> = ({ htmlContent }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState<number>(1);
  const [tree, setTree] = useState<JSX.Element>();

  const [codeHtml] = htmlContent;

  useEffect(() => {
    if (count == 2) return setCount(1);
    renderTree();
    setCount(2);
  }, [tree]);

  const insert = async (value: number) => {
    if (!root) {
      root = new Node(value);
      await renderTree();
      return;
    }
    let current = root;
    while (current) {
      if (value >= current.value) {
        if (!current.right) {
          current.right = new Node(value);
          break;
        } else current = current.right;
      } else {
        if (!current.left) {
          current.left = new Node(value);
          break;
        } else current = current.left;
      }
    }
    await renderTree();
  };

  const renderTree = async () => {
    return setTree(render(root, height(root), 0, null));
  };

  return (
    <div className="overflow-hidden">
      <OptionBackground>
        <Input ref={inputRef} content="Enter your value" />
        <Buttons>
          <Button
            onClick={() => {
              insert(parseInt(inputRef.current?.value || "0"));
            }}
            content="Insert"
          />
        </Buttons>
      </OptionBackground>
      <div className="w-screen min-h-[50vh] overflow-hidden flex justify-center pt-28">
        <div>
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
