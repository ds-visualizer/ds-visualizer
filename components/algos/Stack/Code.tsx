import React from "react";
import Input from "@Components/layouts/Input";
import OptionBackground from "@Components/layouts/OptionBackground";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";
import Content from "@Root/components/layouts/Content";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import useStack from "@Components/hooks/useStack";

interface Props {
  html: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const index: React.FC<Props> = ({ html }) => {
  const { methods, refs, stack } = useStack();

  const { empty, pop, push } = methods;
  const { inputRef } = refs;

  return (
    <>
      <>
        <OptionBackground>
          <Input ref={inputRef} content="Enter the value you want to add: " />
          <Buttons>
            <Button
              onClick={(_e) => {
                const value = parseInt(inputRef.current?.value || "0");
                push(value);
              }}
              content="Push"
            />
            <Button
              onClick={(_e) => {
                pop();
              }}
              content="Pop"
            />
            <Button
              onClick={(_e) => {
                empty();
              }}
              content="Empty"
            />
          </Buttons>
        </OptionBackground>
        <div className="h-[40vh] flex relative overflow-y-auto">
          <motion.div
            className={`flex  flex-col-reverse items-center mt-10 px-3 py-3 border-2 transition-all border-purple-500 border-t-0 min-h-[0.8rem] w-28 mx-auto `}
          >
            <AnimateSharedLayout>
              <AnimatePresence>{stack}</AnimatePresence>
            </AnimateSharedLayout>
          </motion.div>
          <div className="absolute right-1/2 -translate-x-14 text-gray-300 top-0">
            Count: <span className="text-white">{stack.length}</span>
          </div>
        </div>
        <Content html={html} />
      </>
    </>
  );
};

export default index;
