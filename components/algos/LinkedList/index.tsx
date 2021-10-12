import React, { useRef, useState } from "react";
import { Node } from "@Root/misc/algo/Linkedlist/Node";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

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

  const addFirst = async (value: number) => {
    length++;
    if (First === null || Last === null) {
      return (First = Last = new Node(value)) && renderList();
    }
    let temp = new Node(value);
    temp.next = First;
    First = temp;
    renderList();
  };

  const removeFirst = () => {
    if (First === null) return;
    First = First.next;
    renderList();
  };

  const removeLast = async () => {
    if (First === null) {
      return;
    }
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
    setNodes(arr);
  };

  const printList = () => {
    let str = "";
    if (First === null) {
      console.log("No first value");
    } else {
      let curr = First;
      while (curr?.next != null) {
        str += `${curr.value} -> `;
        curr = curr?.next;
      }
      return str;
    }
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
