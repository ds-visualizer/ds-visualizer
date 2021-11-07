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

  const parentIndex = (index: number) => {
    // Returns the parent index of the index

    return Math.floor((index - 1) / 2);
  };

  const parent = (index: number) => {
    return arr[parentIndex(index)];
  };

  const bubbleUp = (index: number) => {
    [arr[index], arr[parentIndex(index)]] = [
      arr[parentIndex(index)],
      arr[index],
    ];
  };

  const insert = async (value: number) => {
    arr.push(value);
    let index = arr.length - 1; // Since it gets added in the last

    // Now we want to bubble up the elements so they satisfy the heap property
    // We want to keep doing this till we find the right parent

    // This loop iterates till we reach the top of the tree in worst condition
    // And height of tree is logn

    while (arr[index] > parent(index)) {
      // Bubble up has time of n
      bubbleUp(index);

      // Since out index will now be swapped with the parent
      index = parentIndex(index);
    }

    setArr([...arr]);
    root.root = null;
  };

  return { tree, insert };
};

export default useHeap;
