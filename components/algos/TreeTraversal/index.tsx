import React, { useRef, useState, useEffect } from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import OptionBackground from "@Components/layouts/OptionBackground";
import Button from "@Components/layouts/Button";
import Buttons from "@Components/layouts/Buttons";
import Content from "@Components/layouts/Content";
import Input from "@Components/layouts/Input";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import insert from "@Components/algos/BinaryTree/insert";

import useBinaryTree from "@Root/hooks/useBinaryTree";
import Node from "@Components/algos/BinaryTree/Node";
import popUp from "./popUpNode";

interface Props {
  html: mdxHtml[];
}

let root: { root: Node<number> | null } = { root: null };

const index: React.FC<Props> = ({ html }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { renderTree, tree } = useBinaryTree(root);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    (async () => {
      await insert(10, root, renderTree);
      await insert(15, root, renderTree);
      await insert(12, root, renderTree);
      await insert(20, root, renderTree);
      await insert(4, root, renderTree);
      await insert(8, root, renderTree);
      await insert(2, root, renderTree);
      await renderTree();
    })();

    return () => {
      (async () => {
        root.root = null;
      })();
    };
  }, []);

  const preOrder = async (node: Node<any> | null) => {
    if (!node) return;
    await popUp(node);
    await preOrder(node.left);
    await preOrder(node.right);
  };

  const postOrder = async (node: Node<any> | null) => {
    if (!node) return;

    await postOrder(node.left);
    await postOrder(node.right);
    await popUp(node);
  };

  const inOrder = async (node: Node<any> | null) => {
    if (!node) return;

    await inOrder(node.left);
    await popUp(node);
    await inOrder(node.right);
  };

  const levelOrder = async (node: Node<any> | null) => {
    if (!node) return;

    const queue: Node<any>[] = [];
    queue.push(node);
    while (queue.length) {
      const current = queue.shift()!;
      await popUp(current);
      if (current?.left) queue.push(current.left);
      if (current?.right) queue.push(current.right);
    }
  };

  return (
    <div className="overflow-hidden">
      <OptionBackground>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (running) return;
            setRunning(true);
            insert(parseInt(inputRef.current?.value || "0"), root, renderTree);
            setRunning(false);
            inputRef!.current!.value = "";
          }}
        >
          <div>
            <Input placeholder="0" ref={inputRef} content="Enter your value:" />
          </div>
          <Buttons>
            <Button type="submit" content="Insert" />
            <Button
              type="button"
              content="Pre-Order"
              onClick={async () => {
                if (running) return;
                setRunning(true);
                await preOrder(root.root);
                setRunning(false);
              }}
            />
            <Button
              type="button"
              content="Post-Order"
              onClick={async () => {
                if (running) return;
                setRunning(true);
                await postOrder(root.root);
                setRunning(false);
              }}
            />
            <Button
              type="button"
              content="In-Order"
              onClick={async () => {
                if (running) return;
                setRunning(true);
                await inOrder(root.root);
                setRunning(false);
              }}
            />
            <Button
              type="button"
              content="Level-Order"
              onClick={async () => {
                if (running) return;
                setRunning(true);
                await levelOrder(root.root);
                setRunning(false);
              }}
            />
            <Button
              type="button"
              content="Clear"
              onClick={async () => {
                root.root = null;
                await renderTree();
              }}
            />
          </Buttons>
        </form>
      </OptionBackground>
      <div className="w-screen min-h-[50vh] overflow-hidden flex justify-center pt-28">
        <div className="overflow-hidden p-5">
          <AnimatePresence>
            <AnimateSharedLayout>{tree}</AnimateSharedLayout>
          </AnimatePresence>
        </div>
      </div>
      <Content html={html[0]} />
    </div>
  );
};

export default index;
