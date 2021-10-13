import React from "react";
import { motion } from "framer-motion";

function generator() {
  const random = Math.random().toString(16).slice(2, 10);
  return `0x${random}`;
}

export class Node {
  value: number;
  next: Node | null;
  location: string;
  private id: string;
  private static _id: number = 0;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.location = generator();
    this.id = "id" + Node._id++;
  }

  get getID() {
    return `${this.id}`;
  }

  addText(str: string) {
    const ele = document.querySelector<HTMLDivElement>(`#${this.id}`);
    if (!ele) return;
    ele.innerText = str;
  }

  render() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        key={this.location}
      >
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.2, 1],
            }}
            exit={{
              scale: [1, 1.2, 0],
            }}
            transition={{ duration: 0.3 }}
            className="nodeValue w-14 h-14 flex justify-center items-center  rounded text-lg  text-primary"
            style={{ backgroundColor: "#7a7a7a" }}
          >
            {this.value}
          </motion.div>
          <motion.div
            className="ml-2 arrow"
            animate={{
              rotate: ["-20deg", "15deg", "0deg"],
            }}
          >
            <Arrow />
          </motion.div>
        </div>
        <div className="text-sm text-white mt-1">{this.location}</div>
        <div id={`${this.id}`} className="text-purple-500"></div>
      </motion.div>
    );
  }
}

const Arrow = () => (
  <svg
    width="44"
    height="18"
    viewBox="0 0 44 18"
    fill="#BB86FC"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44 9L29 0.339746V17.6603L44 9ZM0.5 10.5H30.5V7.5H0.5V10.5Z"
      fill="#d4d4d4"
    />
  </svg>
);
