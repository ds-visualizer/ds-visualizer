import React, { useEffect, useRef, useState } from "react";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Root/components/layouts/Input";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Node from "./Node";
import NullNode from "./NullNode";
import graphFunction from "./graphFunction";

interface Props {}

const render = (
  root: Node<number> | null,
  rootHeight: number,
  currentHeight: number,
  parent: Node<number> | null
): JSX.Element => {
  if (currentHeight > rootHeight) {
    return <></>;
  }

  if (!root)
    return (
      <>
        <div className="flex  space-y-8 flex-col items-center">
          <div className={`nu${parent?.id || 0}`}>
            {new NullNode().render()}
          </div>
          <div className={`flex space-x-10`}>
            {render(null, rootHeight, currentHeight + 1, null)}
            {render(null, rootHeight, currentHeight + 1, null)}
          </div>
        </div>
      </>
    );

  const data = graphFunction(root);

  return (
    <>
      <div className="flex space-y-8 flex-col items-center">
        <div id={`n${root.id}`}>{root.render(data)}</div>
        <div id={`c${root.id}`} className={`flex space-x-10`}>
          {render(root.left, rootHeight, currentHeight + 1, root)}
          {render(root.right, rootHeight, currentHeight + 1, root)}
        </div>
      </div>
    </>
  );
};

const height = (node: Node<any> | null): number => {
  if (!node) return -1;
  return 1 + Math.max(height(node.left), height(node.right));
};

let root: Node<number> | null = null;

const index: React.FC<Props> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState<number>(1);
  const [tree, setTree] = useState<JSX.Element>();

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
