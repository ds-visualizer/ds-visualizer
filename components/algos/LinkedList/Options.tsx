import React, { useRef } from "react";
import { motion } from "framer-motion";
import OptionBackground from "@Components/layouts/OptionBackground";

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
              <div className="">Enter the Value: </div>

              <input
                ref={valueRef}
                type="number"
                name=""
                id=""
                className="h-9 w-[10rem] rounded outline-none px-2 focus:border-primary border-2"
              />
            </div>
            <div>
              <div>Enter the index:</div>
              <input
                type="number"
                name=""
                id=""
                className="h-9 w-[10rem] rounded outline-none px-2 focus:border-primary border-2"
                ref={indexRef}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="space-x-3 h-1/2 overflow-scroll w-screen justify-center flex items-center">
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
      </div>
    </OptionBackground>
  );
};

export default Options;
