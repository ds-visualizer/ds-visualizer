import React, { useRef } from "react";
import { motion } from "framer-motion";
import OptionBackground from "@Components/layouts/OptionBackground";
import Buttons from "@Root/components/layouts/Buttons";
import Input from "@Root/components/layouts/Input";

interface Props {
  addFirst: (value: number) => void;
  addLast: (value: number) => void;
  removeFirst: () => void;
  removeLast: () => void;
  addAt: (index: number, value: number) => void;
  removeAt: (index: number) => void;
}

const Options: React.FC<Props> = ({
  removeLast,
  removeFirst,
  addFirst,
  addLast,
  addAt,
  removeAt,
}) => {
  const valueRef = useRef<HTMLInputElement>(null);
  const indexRef = useRef<HTMLInputElement>(null);

  const inputCheck = () => {
    if (!valueRef.current) return;
    let value = +valueRef.current.value;
    valueRef.current.value = "";
    return value;
  };

  return (
    <OptionBackground>
      <div className=" flex-col flex justify-end items-center pt-3">
        <div>
          <form
            className="flex  space-x-4"
            onSubmit={(e) => {
              e.preventDefault();
              const value = inputCheck();
              if (value == undefined) return;
              addFirst(value);
            }}
          >
            <div>
              <Input ref={valueRef} type="number" content="Enter the Value: " />
            </div>
            <div>
              <Input type="number" content="Enter the index:" ref={indexRef} />
            </div>
          </form>
        </div>
      </div>
      <div>
        <Buttons className="overflow-x-hidden">
          <motion.button
            onClick={() => {
              const value = inputCheck();
              if (value == undefined) return;
              addFirst(value);
            }}
            whileTap={{ scale: 0.8 }}
            className="btn"
          >
            Add First
          </motion.button>
          <motion.button
            onClick={() => {
              const value = inputCheck();
              if (value == undefined) return;
              addLast(value);
            }}
            whileTap={{ scale: 0.8 }}
            className="btn"
          >
            Add Last
          </motion.button>
          <motion.button
            onClick={() => {
              const value = valueRef.current?.value || "0";
              const index = indexRef.current?.value || "0";
              addAt(parseInt(index), parseInt(value));
            }}
            whileTap={{ scale: 0.8 }}
            className="btn"
          >
            Insert At
          </motion.button>
          <motion.button
            onClick={() => {
              const value = inputCheck();
              if (value == undefined) return;
              removeFirst();
            }}
            whileTap={{ scale: 0.8 }}
            className="btn"
          >
            Remove First
          </motion.button>
          <motion.button
            onClick={() => {
              const value = inputCheck();
              if (value == undefined) return;
              removeLast();
            }}
            whileTap={{ scale: 0.8 }}
            className="btn"
          >
            Remove Last
          </motion.button>
          <motion.button
            onClick={() => {
              const index = indexRef.current?.value || "0";
              removeAt(parseInt(index));
            }}
            whileTap={{ scale: 0.8 }}
            className="btn"
          >
            Remove At
          </motion.button>
        </Buttons>
      </div>
    </OptionBackground>
  );
};

export default Options;
