import React, { useRef, useState } from "react";
import { Node } from "@Misc/algo/Node";
import { AnimatePresence, motion } from "framer-motion";
import CurrentSVG from "@Misc/algo/Current";
import timeout from "@Misc/algo/setTimeout";
import { shiftLeft, shiftBack } from "@Root/misc/algo/shifts";

//
import Options from "./Options";

let First: Node | null = null;
let Last: Node | null = null;
let length: number = 0;

const LinkedList: React.FC = () => {
  let [current, setCurrent] = useState<boolean>();
  let [nodes, setNodes] = useState<JSX.Element[]>([]);
  let [option, setOption] = useState<string>("");
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

    // if (nodesRef.current) {
    //   nodesRef.current.style.transform = "translate(30,0)";
    // }
    shiftLeft();
    await timeout(() => {
      temp.next = First;
      First = temp;
    }, 1000);
    shiftBack();
    renderList();
  };

  const removeFirst = () => {
    if (First === null) return;
    First = First.next;
    renderList();
  };

  const removeLast = () => {
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
    <div className="flex flex-col  min-h-screen justify-center items-center">
      <div className="relative">
        <div className="flex space-x-3" ref={nodesRef} id="nodes">
          <AnimatePresence>{nodes}</AnimatePresence>
        </div>
        {current && (
          <div className="absolute left-0">
            <CurrentSVG />
          </div>
        )}
      </div>
      <Options
        removeLast={removeLast}
        addFirst={addFirst}
        addLast={addLast}
        removeFirst={removeFirst}
      />
    </div>
  );
};

export default LinkedList;
