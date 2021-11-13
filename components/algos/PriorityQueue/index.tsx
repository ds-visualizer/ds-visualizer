import React, { useRef } from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Root/components/layouts/Content";
import useHeap from "@Components/hooks/useHeap";

import Node from "@Components/algos/BinaryTree/Node";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Root/components/layouts/Input";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Components/layouts/Button";
import { AnimateSharedLayout } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface Props {
  html: mdxHtml[];
}

const root: { root: Node<number> | null } = { root: null };
const index: React.FC<Props> = ({ html }) => {
  const { clear, heap, syncInsert, syncRemove } = useHeap(root);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="">
      <OptionBackground>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            syncInsert(parseInt(inputRef!.current!.value || "0"));
            inputRef!.current!.value = "";
          }}
        >
          <Input placeholder="0" ref={inputRef} content="Enter Your Value:" />
          <Buttons>
            <Button type="submit" content="Insert" />
            <Button
              type="button"
              onClick={() => {
                syncRemove();
              }}
              content="Remove"
            />
            <Button
              type="button"
              onClick={() => {
                clear();
              }}
              content="Clean"
            />
          </Buttons>
        </form>
      </OptionBackground>
      <div
        id="arr"
        className="flex space-x-5 overflow-hidden justify-center items-center py-5 my-10"
      >
        <AnimatePresence>
          <AnimateSharedLayout>{heap}</AnimateSharedLayout>
        </AnimatePresence>
      </div>
      <Content html={html[0]} />
    </div>
  );
};

export default index;
