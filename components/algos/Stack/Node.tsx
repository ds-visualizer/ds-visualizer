import { motion } from "framer-motion";

export default class Node {
  public readonly value: any;
  private static count = 0;
  private countN: number;

  constructor(value: any) {
    this.value = value;
    this.countN = Node.count++;
  }

  render(key?: number) {
    return (
      <motion.div
        layout
        initial={{
          y: -100,
          opacity: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          y: -100,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
        key={this.countN}
        className=" mt-1"
      >
        <motion.div
          layout
          style={{ backgroundColor: "#7a7a7a" }}
          className="text-primary w-20 h-9 flex justify-center items-center"
        >
          {this.value}
        </motion.div>
      </motion.div>
    );
  }
}
