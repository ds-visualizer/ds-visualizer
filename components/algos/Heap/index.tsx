import Content from "@Root/components/layouts/Content";
import React, { useRef } from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import useHeap from "@Components/hooks/useHeap";
import Node from "@Components/algos/BinaryTree/Node";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import OptionBackground from "@Components/layouts/OptionBackground";
import Button from "@Root/components/layouts/Button";
import Buttons from "@Root/components/layouts/Buttons";
import Input from "@Root/components/layouts/Input";

interface Props {
  html: Array<mdxHtml>;
}

let root: { root: Node<number> | null } = { root: null };
const index: React.FC<Props> = ({ html }) => {
  const { insert, tree, heap, nextStep, clear } = useHeap(root);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="">
      <div>
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
      </div>
      <div className="w-screen min-h-[40vh] overflow-hidden flex justify-center pt-20">
        <AnimatePresence>
          <AnimateSharedLayout>{tree}</AnimateSharedLayout>
        </AnimatePresence>
      </div>
      <div className="flex space-x-5 mt-5 justify-center ">
        <AnimatePresence>
          <AnimateSharedLayout>{heap}</AnimateSharedLayout>
        </AnimatePresence>
      </div>
      <Content html={html[0]} />
    </div>
  );
};

export default index;
