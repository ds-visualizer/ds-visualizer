import React, { useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  addFirst: (value: number) => void;
  addLast: (value: number) => void;
  removeFirst: () => void;
  removeLast: () => void;
}

const Options: React.FC<Props> = ({
  removeLast,
  removeFirst,
  addFirst,
  addLast,
}) => {
  let inputRef = useRef<HTMLInputElement>(null);

  const inputCheck = () => {
    if (!inputRef.current) return;
    let value = +inputRef.current.value;
    console.log(value);
    inputRef.current.value = "";
    return value;
  };

  return (
    <div className="w-full h-64 bg-secondary text-secondary">
      <div className="h-1/2 flex-col flex justify-end items-center pt-3">
        <div>
          <div className="mb-2">Enter your Value: </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const value = inputCheck();
              if (value == undefined) return;
              addFirst(value);
            }}
          >
            <input
              ref={inputRef}
              type="number"
              name=""
              id=""
              className="h-9 w-[15rem] rounded outline-none px-2 focus:border-primary border-2"
            />
          </form>
        </div>
      </div>
      <div className="space-x-3 h-1/2 justify-center flex items-center">
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
      </div>
    </div>
  );
};

export default Options;
