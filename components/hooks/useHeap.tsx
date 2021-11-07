import { useEffect, useState } from "react";
import Node from "@Components/algos/BinaryTree/Node";
import useBinaryTree from "./useBinaryTree";

export const balancedInsert = async (
  value: number,
  rootObj: { root: Node<number> | null }
) => {
  if (!rootObj.root) {
    rootObj.root = new Node(value);
    return;
  }

  const queue: Node<number>[] = [];

  queue.push(rootObj.root);

  while (queue.length != 0) {
    const node = queue.shift()!;

    if (!node.left) {
      node.left = new Node(value);
      break;
    }

    if (!node.right) {
      node.right = new Node(value);
      break;
    }

    if (node.left) queue.push(node.left);

    if (node.right) queue.push(node.right);
  }
};

const useHeap = (root: { root: Node<number> | null }) => {
  const { renderTree, tree } = useBinaryTree(root);
  const [arr, setArr] = useState<number[]>([]);

  useEffect(() => {
    arr.forEach((el) => balancedInsert(el, root));
    renderTree();
  }, [arr]);

  const insert = async (value: number) => {
    setArr([...arr, value]);
    root.root = null;
  };

  return { tree, insert };
};

export default useHeap;
