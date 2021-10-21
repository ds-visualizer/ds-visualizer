import { motion } from "framer-motion";

export default class Node<T> {
  value: T;
  right: Node<T> | null = null;
  left: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  render() {
    return (
      <motion.div
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        initial={{
          opacity: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: [0.9, 1.1, 1],
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
        layout
        className="w-10  rounded flex justify-center items-center h-10 bg-gray-400"
      >
        {this.value}
      </motion.div>
    );
  }
}
