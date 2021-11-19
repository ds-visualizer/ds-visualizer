import { useState, useEffect } from "react";
import Node from "@Components/algos/BinaryTree/Node";
import render from "@Components/algos/BinaryTree/render";
import height from "@Components/algos/BinaryTree/height";

const useBinaryTree = (root: { root: Node<number> | null }) => {
  const [count, setCount] = useState<number>(1);
  const [tree, setTree] = useState<JSX.Element>();

  useEffect(() => {
    if (count == 2) return setCount(1);
    renderTree();
    setCount(2);
  }, [tree]);

  const renderTree = async () => {
    return setTree(render(root, height(root), 0, null));
  };
  return { renderTree, tree };
};

export default useBinaryTree;
