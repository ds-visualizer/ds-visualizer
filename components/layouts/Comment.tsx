import React from "react";
import { Comment as IComment } from "@prisma/client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const { content, user } = comment;
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      className="flex space-y-2 flex-col mx-4 my-8"
    >
      <div className="flex space-x-3 items-center">
        <Image
          width="30"
          height="30"
          className="rounded-full"
          src={`https://github.com/${user}.png`}
        />
        <div className="text-gray-50 text-lg xl:text-2xl">{user}</div>
      </div>
      <div className="text-gray-400 ml-5">{content}</div>
    </motion.div>
  );
};

export default Comment;
