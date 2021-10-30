import React, { useRef } from "react";
import OptionBackground from "@Components/layouts/OptionBackground";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Components/layouts/Button";
import Input from "@Root/components/layouts/Input";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

class Node {
  private static NodeId = 0;
  value: number;
  right: Node | null = null;
  left: Node | null = null;
  id: number;

  constructor(Value: number) {
    this.value = Value;
    this.id = Node.NodeId++;
  }
}

const index = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="overflow-hidden">
      <OptionBackground className="flex">
        <Input ref={inputRef} content="Enter your value" />
        <Buttons>
          <Button content="Insert" />
        </Buttons>
      </OptionBackground>

      <div className="w-screen min-h-[50vh] overflow-hidden flex justify-center pt-28">
        <AnimatePresence>
          <AnimateSharedLayout>{}</AnimateSharedLayout>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default index;
