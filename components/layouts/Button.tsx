import React from "react";
import { motion } from "framer-motion";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  content: string;
}

const button: React.FC<Props> = ({ onClick, content }) => {
  return (
    <motion.button onClick={onClick} whileTap={{ scale: 0.8 }} className="btn">
      {content}
    </motion.button>
  );
};

export default button;
