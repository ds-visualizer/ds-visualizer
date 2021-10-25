import React from "react";
import { motion } from "framer-motion";

let generator = () => {
  const random = Math.random().toString(16).slice(2, 10);
  return random;
};

export class Value {
  value: number;
  key: string;
  constructor(value: number) {
    this.value = value;
    this.key = generator();
  }

  render() {
    return (
      <motion.div
        key={this.key}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.1 }}
        className="w-10 h-10 flex justify-center items-center  rounded bg-gray-500 text-white"
      >
        {this.value}
      </motion.div>
    );
  }
}
