import React from "react";
import { motion } from "framer-motion";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  content: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const button: React.FC<Props> = ({ onClick, content, type }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
      className="btn"
    >
      {content}
    </motion.button>
  );
};

export default button;
