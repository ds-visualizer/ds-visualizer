import React from "react";
import { motion } from "framer-motion";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  content: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const button: React.FC<Props> = ({ onClick, content, type, className }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
      className={`btn border-gray-500 text-gray-100 ${className}`}
    >
      {content}
    </motion.button>
  );
};

export default button;
