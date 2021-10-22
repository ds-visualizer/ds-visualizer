import { motion } from "framer-motion";

export default class NullNode {
  render() {
    return (
      <motion.div className="w-10 null rounded flex justify-center items-center h-10"></motion.div>
    );
  }
}
