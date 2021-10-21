import { motion } from "framer-motion";

export default class Node<T> {
  private static NID = 0;

  value: T;
  right: Node<T> | null = null;
  left: Node<T> | null = null;
  id: number;

  constructor(value: T) {
    this.value = value;
    this.id = Node.NID++;
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
