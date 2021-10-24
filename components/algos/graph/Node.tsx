import React from "react";
import { motion } from "framer-motion";

export default class Node<T> {
  value: T;

  private id: string;
  private static _id: number = 0;

  constructor(value: T) {
    this.value = value;

    this.id = "id" + Node._id++;
  }

  get getID() {
    return `${this.id}`;
  }

  render(): JSX.Element {
    return (
      <motion.div
        key={this.id}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
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
            className="nodeValue w-14 h-14 flex justify-center items-center  rounded overflow-hidden  text-primary"
            style={{ backgroundColor: "#7a7a7a" }}
          >
            {this.value}
          </motion.div>
        </div>
      </motion.div>
    );
  }
}
