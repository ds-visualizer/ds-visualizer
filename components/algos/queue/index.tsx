import React, { useState, useRef } from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Root/components/layouts/Content";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Components/layouts/Input";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Node from "./Node";

interface Props {
  html: mdxHtml[];
}

const index: React.FC<Props> = ({ html }) => {
  const [codeHtml] = html;
  const [queue, setQueue] = useState<Array<JSX.Element>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const enqueue = () => {
    const value = parseInt(inputRef.current?.value || "0");
    const node = new Node(value);
    const newQ = [...queue, node.render()];
    setQueue(newQ);
  };

  const dequeue = () => {
    const newQ = queue.slice(1);
    setQueue(newQ);
  };

  return (
    <>
      <OptionBackground>
        <Input ref={inputRef} content="Element to add into the queue: " />
        <Buttons>
          <Button
            onClick={() => {
              enqueue();
            }}
            content="Enqueue"
          />
          <Button
            onClick={() => {
              dequeue();
            }}
            content="Dequeue"
          />
        </Buttons>
      </OptionBackground>
      <div className="w-screen overflow-scroll">
        <div className="flex mt-4 space-x-3 items-center justify-center border-2 border-purple-500 w-min mx-auto px-3 border-l-0 border-r-0 h-20">
          <AnimateSharedLayout>
            <AnimatePresence>{queue}</AnimatePresence>
          </AnimateSharedLayout>
        </div>
      </div>

      <div>
        <Content html={codeHtml} />
      </div>
    </>
  );
};

export default index;
