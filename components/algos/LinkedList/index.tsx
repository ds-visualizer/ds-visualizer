import React, { useRef, useState, useEffect } from "react";
import { Node } from "@Root/misc/algo/Linkedlist/Node";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import NullNode from "@Misc/algo/Linkedlist/NullNode";

//
import Options from "./Options";
import Content from "@Root/components/layouts/Content";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  html: MDXRemoteSerializeResult<Record<string, unknown>>;
  codeHTML: MDXRemoteSerializeResult<Record<string, unknown>>;
}

let First: Node | null = null;
let Last: Node | null = null;
let length: number = 0;

const LinkedList: React.FC<Props> = ({ html, codeHTML }) => {
  let [nodes, setNodes] = useState<JSX.Element[]>([]);
  const [code, setCode] = useState(true);
  const nodesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    renderList();
  }, []);

  useEffect(() => {
    setFirstNLast();
  }, [nodes]);

  const addLast = (value: number) => {
    length++;
    if (First === null || Last === null) {
      return (First = Last = new Node(value)) && renderList();
    }
    let temp = new Node(value);
    Last.next = temp;
    Last = temp;
    renderList();
  };

  const addFirst = (value: number): void => {
    length++;
    if (First === null || Last === null) {
      First = Last = new Node(value);
      renderList();
      return;
    }
    let temp = new Node(value);
    temp.next = First;
    First = temp;
    renderList();
  };

  const removeFirst = () => {
    if (First === null) return;
    length--;
    First = First.next;
    renderList();
  };

  const addAt = (index: number, value: number): void => {
    if (index < 0 || index > length) return;
    if (index == 0) return addFirst(value);
    if (index == length) return addLast(value);
    length++;
    let current = First;
    const node = new Node(value);
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    const temp = current!.next;
    current!.next = node;
    node.next = temp;
    renderList();
  };

  const removeAt = (index: number): void => {
    if (index >= length || index < 0) return;
    console.log(index);
    if (index == 0) return removeFirst();

    if (index == length - 1) {
      removeLast();
      return;
    }

    length--;
    let current = First;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    current!.next = current!.next!.next;
    renderList();
  };

  const removeLast = async () => {
    if (First === null) return;

    length--;
    if (First.next === null) {
      First = Last = null;
      renderList();
      return;
    }
    let curr = First;
    while (curr?.next?.next != null) {
      curr = curr.next;
    }
    curr.next = null;
    Last = curr;
    renderList();
  };

  const renderList = () => {
    let current = First;
    let arr: JSX.Element[] = [];
    while (current) {
      arr.push(current.render());
      current = current.next;
    }
    const nullNode = new NullNode();
    arr.push(nullNode.render());
    setNodes(arr);
  };

  const setFirstNLast = () => {
    if (!First) return;
    if (length == 1) {
      First.addText("head \ntail");
      return;
    }
    let current: Node | null = First;
    while (current) {
      current.addText("");
      current = current.next;
    }
    First.addText("head");
    Last!.addText("tail");
  };

  return (
    <div className="flex flex-col w-screen bg-primary min-h-screen">
      <button
        onClick={() => {
          setCode((prev) => !prev);
        }}
        className="fixed z-20 rounded top-10 right-5 px-4 py-2 bg-black text-white"
      >
        {code ? "Explanation" : "Code"}
      </button>
      <Options
        removeLast={removeLast}
        addFirst={addFirst}
        addLast={addLast}
        removeFirst={removeFirst}
        addAt={addAt}
        removeAt={removeAt}
      />
      <div className="relative h-full px-10 py-10">
        <div
          className="flex space-x-3 overflow-hidden"
          ref={nodesRef}
          id="nodes"
        >
          <AnimateSharedLayout>
            <AnimatePresence>{nodes}</AnimatePresence>
          </AnimateSharedLayout>
        </div>
      </div>
      <Content html={code ? codeHTML : html} />
    </div>
  );
};

export default LinkedList;
