import { motion } from "framer-motion";

export default class Node {
  private readonly value: number;
  private static count = 0;
  private countN: number;

  constructor(value: number) {
    this.value = value;
    this.countN = Node.count++;
  }

  render() {
    return (
      <motion.div
        layout
        initial={{
          x: 100,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          x: -100,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
        key={this.countN}
        className=""
      >
        <motion.div
          layout
          style={{ backgroundColor: "#7a7a7a" }}
          className="text-primary h-16 w-16 flex justify-center items-center"
        >
          {this.value}
        </motion.div>
      </motion.div>
    );
  }
}
