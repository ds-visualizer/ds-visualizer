import React, { useRef, useState } from "react";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Root/components/layouts/Input";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Node from "./Node";
import NullNode from "./NullNode";

interface Props {}

const render = (
  root: Node<number | string> | null,
  rootHeight: number,
  currentHeight: number
): JSX.Element => {
  if (currentHeight > rootHeight) {
    return <></>;
  }

  if (!root)
    return (
      <>
        <div className="flex space-y-8 flex-col items-center">
          {new NullNode().render()}
          <div className={`flex space-x-10`}>
            {render(null, rootHeight, currentHeight + 1)}
            {render(null, rootHeight, currentHeight + 1)}
          </div>
        </div>
      </>
    );

  const graphFunction = () => {
    const div = document.querySelector(`#c${root.id}`);
    if (!div) return;
    // console.log(div.getBoundingClientRect().width);
    console.log(div);
  };

  return (
    <div className="flex space-y-8 flex-col items-center">
      <div id={`n${root.id}`}>{root.render()}</div>
      <div id={`c${root.id}`} className={`flex space-x-10`}>
        {render(root.left, rootHeight, currentHeight + 1)}
        {render(root.right, rootHeight, currentHeight + 1)}
      </div>
      {graphFunction()}
    </div>
  );
};

const height = (node: Node<any> | null): number => {
  if (!node) return -1;
  return 1 + Math.max(height(node.left), height(node.right));
};

let root: Node<number> | null = null;

const index: React.FC<Props> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [tree, setTree] = useState<JSX.Element>();

  const insert = (value: number) => {
    if (!root) {
      root = new Node(value);
      renderTree();
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
    renderTree();
  };

  const renderTree = () => setTree(render(root, height(root), 0));

  return (
    <>
      <OptionBackground>
        <Input ref={inputRef} content="Enter your value" />
        <Buttons>
          <Button
            onClick={() => {
              insert(parseInt(inputRef.current?.value || "0"));
            }}
            content="Inset"
          />
        </Buttons>
      </OptionBackground>
      <div className="w-screen min-h-screen overflow-hidden flex justify-center pt-28">
        <div>
          <AnimatePresence>
            <AnimateSharedLayout>{tree}</AnimateSharedLayout>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default index;
