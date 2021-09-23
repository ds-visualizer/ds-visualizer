import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function generator() {
  const random = Math.random().toString(16).slice(2, 10);
  return `0x${random}`;
}

export class Node {
  value: number;
  next: Node | null;
  location: string;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.location = generator();
  }

  render() {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1.2, 1],
        }}
        exit={{
          scale: [1, 1.2, 0],
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
        key={this.location}
      >
        <div
          key={this.location}
          className="w-10 h-10 flex justify-center items-center  rounded bg-gray-500 text-white"
        >
          {this.value}
        </div>
        <div>
          <Arrow />
        </div>
      </motion.div>
    );
  }
}

const Arrow = () => (
  <svg
    width="44"
    height="18"
    viewBox="0 0 44 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44 9L29 0.339746V17.6603L44 9ZM0.5 10.5H30.5V7.5H0.5V10.5Z"
      fill="black"
    />
  </svg>
);
