import React from "react";
import { motion } from "framer-motion";

let generator = () => {
  const random = Math.random().toString(16).slice(2, 10);
  return random;
};

const styles = {
  divClass:
    "w-10 h-10 flex justify-center items-center  rounded bg-gray-500 text-white mr-[50px]",
};

export class Value {
  value: number;
  key: string;
  selected: boolean;
  constructor(value: number) {
    this.value = value;
    this.key = generator();
    this.selected = false;
  }

  render() {
    return (
      <motion.div
        key={this.key}
        layout
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
        className={`${styles.divClass} ${
          this.selected ? "border-4 border-white" : ""
        }`}
      >
        {this.value}
      </motion.div>
    );
  }
}
