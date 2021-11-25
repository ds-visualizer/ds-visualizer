import Content from "@Root/components/layouts/Content";
import React, { useEffect, useRef, useState } from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import useHeap from "@Root/hooks/useHeap";
import Node from "@Components/algos/BinaryTree/Node";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import OptionBackground from "@Components/layouts/OptionBackground";
import Button from "@Root/components/layouts/Button";
import Buttons from "@Root/components/layouts/Buttons";
import Input from "@Root/components/layouts/Input";
import HeapInstructions from "./HeapInstructions";

interface Props {
  html: Array<mdxHtml>;
}

let root: { root: Node<number> | null } = { root: null };
const index: React.FC<Props> = ({ html }) => {
  const { insert, tree, heap, nextStep, clear, renderTree, remove } =
    useHeap(root);
  const [show, setShow] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!show) return;
    renderTree();
  }, [show]);

  return (
    <div
      onClick={() => {
        if (!showInstructions) return;
        setShowInstructions(false);
      }}
    >
      <motion.div layout className="relative">
        {showInstructions && (
          <div className="absolute right-5 top-5">
            <HeapInstructions />
          </div>
        )}
        <Button
          content={`${show ? "Hide" : "Show"} Tree`}
          type="button"
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="absolute left-10 top-10"
        />
        <OptionBackground>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              insert(parseInt(inputRef.current?.value || "0"));
              inputRef.current!.value = "";
            }}
          >
            <Input ref={inputRef} content="Enter your value:" />
            <Buttons>
              <Button type="submit" content="Insert" />
              <Button
                type="button"
                content="Remove"
                onClick={() => {
                  remove();
                }}
              />
              <Button
                type="button"
                content="Next Step"
                onClick={() => {
                  nextStep();
                }}
              />
              <Button
                type="button"
                content="Clear"
                onClick={() => {
                  clear();
                }}
              />
            </Buttons>
          </form>
        </OptionBackground>
      </motion.div>
      <AnimateSharedLayout>
        {show && (
          <motion.div
            id="tree"
            className="w-screen min-h-[40vh] overflow-hidden flex justify-center pt-20"
          >
            <AnimatePresence>
              <AnimateSharedLayout>{tree}</AnimateSharedLayout>
            </AnimatePresence>
          </motion.div>
        )}
        <div id="arr" className="flex space-x-5 my-10 justify-center ">
          <AnimatePresence>
            <AnimateSharedLayout>{heap}</AnimateSharedLayout>
          </AnimatePresence>
        </div>
        <motion.div id="content" layout>
          <Content html={html[0]} />
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default index;
