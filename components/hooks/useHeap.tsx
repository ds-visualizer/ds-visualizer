import { useEffect, useState } from "react";
import Node from "@Components/algos/BinaryTree/Node";
import useBinaryTree from "./useBinaryTree";

export const balancedInsert = async (
  newNode: Node<number>,
  rootObj: { root: Node<number> | null }
) => {
  if (!rootObj.root) {
    rootObj.root = newNode;
    return;
  }

  const queue: Node<number>[] = [];

  queue.push(rootObj.root);

  while (queue.length != 0) {
    const node = queue.shift()!;

    if (!node.left) {
      node.left = newNode;
      break;
    }

    if (!node.right) {
      node.right = newNode;
      break;
    }

    if (node.left) queue.push(node.left);

    if (node.right) queue.push(node.right);
  }
};

const useHeap = (root: { root: Node<number> | null }) => {
  const { renderTree, tree } = useBinaryTree(root);
  const [arr, setArr] = useState<Node<number>[]>([]);
  const [heap, setHeap] = useState<JSX.Element[]>([]);
  const [next, setNext] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const jsx = arr.map((el, index) => el.heapRender(index));
    setHeap(jsx);
  }, [arr]);

  useEffect(() => {
    if (arr[index] <= parent(index)) return setNext(true);
  }, [arr]);

  useEffect(() => {
    root.root = null;

    arr.forEach((el) => {
      el.left = null;
      el.right = null;
    });
    arr.forEach((el) => balancedInsert(el, root));

    renderTree();
  }, [arr]);

  const parentIndex = (index: number) => {
    return Math.trunc((index - 1) / 2);
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
    if (!next) return;
    arr.push(new Node(value));

    setArr([...arr]);
    setIndex(arr.length - 1);

    arr[arr.length - 1] <= parent(arr.length - 1)
      ? setNext(true)
      : setNext(false);
  };

  const nextStep = () => {
    if (arr[index] <= parent(index)) return;

    bubbleUp(index);
    setArr([...arr]);
    setIndex(parentIndex(index));
  };

  const clear = () => {
    root.root = null;
    renderTree();
    setArr([]);
  };

  return { tree, insert, heap, nextStep, clear };
};

export default useHeap;
