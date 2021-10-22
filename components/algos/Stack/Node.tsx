import { motion } from "framer-motion";

export default class Node {
<<<<<<< HEAD
  private readonly value: number;
  private static count = 0;
  private countN: number;

  constructor(value: number) {
=======
  public readonly value: any;
  private static count = 0;
  private countN: number;

  constructor(value: any) {
>>>>>>> 314da669bc445dc844f921c1e827f8542b22b19c
    this.value = value;
    this.countN = Node.count++;
  }

<<<<<<< HEAD
  render() {
=======
  render(key?: number) {
>>>>>>> 314da669bc445dc844f921c1e827f8542b22b19c
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
