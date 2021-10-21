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
        layout
        className="w-10  rounded flex justify-center items-center h-10 bg-gray-400"
      >
        {this.value}
      </motion.div>
    );
  }
}
