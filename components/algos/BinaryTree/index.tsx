import React, { useRef, useState } from "react";
import Node from "./Node";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Root/components/layouts/Input";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

interface Props {}

const render = (root: Node<number | string> | null) => {
  if (!root) return <div></div>;

  return (
    <div className="flex space-y-8 flex-col items-center">
      <div>{root.render()}</div>
      <div className="flex space-x-10">
        {render(root.left)}
        {render(root.right)}
      </div>
    </div>
  );
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

  const renderTree = () => {
    setTree(render(root));
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
