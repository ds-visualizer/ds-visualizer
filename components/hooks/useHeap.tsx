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
  const [methodType, setMethodType] = useState<"" | "Insert" | "Remove">("");
  const [next, setNext] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const jsx = arr.map((el, index) => el.heapRender(index));
    setHeap(jsx);
  }, [arr]);

  useEffect(() => {
    if (methodType == "Insert")
      if (arr[index] <= parent(index)) return setNext(true);

    if (methodType == "Remove")
      if (index < arr.length && isValidParent(index)) return setNext(true);
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

  const isValidParent = (index: number) => {
    if (!hasLeftChild(index)) return true;

    if (!hasRightChild(index)) return arr[index] >= leftChild(index);

    return arr[index] >= leftChild(index) && arr[index] >= rightChild(index);
  };

  const leftChild = (index: number) => arr[leftChildIndex(index)];

  const rightChild = (index: number) => arr[rightChildIndex(index)];

  const leftChildIndex = (index: number) => 2 * index + 1;

  const rightChildIndex = (index: number) => 2 * index + 2;

  const hasLeftChild = (index: number) => leftChildIndex(index) < arr.length;

  const hasRightChild = (index: number) => rightChildIndex(index) < arr.length;

  const largerChildIndex = (index: number) => {
    if (!hasRightChild(index)) return leftChildIndex(index);

    return leftChild(index) > rightChild(index)
      ? leftChildIndex(index)
      : rightChildIndex(index);
  };

  const bubbleDown = (parent: number, child: number) =>
    ([arr[parent], arr[child]] = [arr[child], arr[parent]]);

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

    setMethodType("Insert");

    arr[arr.length - 1] <= parent(arr.length - 1)
      ? setNext(true)
      : setNext(false);
  };

  /*
  public void remove() {

    if (heap.isEmpty())
      throw new RuntimeException("Heap empty");

    // We remove the first node and put the last node in first
    heap.removeFirst();
    heap.addFirst(heap.pollLast());

    int index = 0;

    // Like in the example we have seen, we only do the swap if the element isn't a valid parent

    // Again the loop will run till it reaches the end, height is logn

    while (index < heap.size() && !isValidParent(index)) {

      // LargerChildIndex is an O(n) operator

      int largerChild = largerChildIndex(index);

      // Bubble down is a O(n) operator

      bubbleDown(index, largerChild);
      index = largerChild;

    }

  }
  */

  const remove = () => {
    if (!next) return;

    if (arr.length == 0) return;
    arr.shift();
    const el = arr.pop();
    if (!el) return setArr([...arr]);
    arr.unshift(el);
    setArr([...arr]);
    setIndex(0);
    setMethodType("Remove");

    0 < arr.length && isValidParent(0) ? setNext(true) : setNext(false);
  };

  const nextStep = () => {
    if (!nextStep) return;

    if (methodType == "") return;

    if (methodType == "Insert") {
      if (arr[index] <= parent(index)) return setMethodType("");

      bubbleUp(index);
      setArr([...arr]);
      setIndex(parentIndex(index));
    }

    if (methodType == "Remove") {
      if (index < arr.length && isValidParent(index)) {
        setMethodType("");
        setNext(true);
        return;
      }

      let largerChild = largerChildIndex(index);
      bubbleDown(index, largerChild);
      setArr([...arr]);
      setIndex(largerChild);
    }
  };

  const clear = () => {
    root.root = null;
    renderTree();
    setArr([]);
  };

  return { tree, insert, heap, nextStep, clear, renderTree, remove };
};

export default useHeap;
