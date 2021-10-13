import { motion } from "framer-motion";

export default class Node {
  value = "Null";
  location = "";
  private id: number = Infinity;
  render() {
    return (
      <motion.div
        layout
        id={`${this.id}`}
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
        </div>
        <div className="text-sm text-white mt-1">{this.location}</div>
      </motion.div>
    );
  }
}
