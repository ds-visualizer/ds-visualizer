import React from "react";
import { Comment as IComment } from "@prisma/client";

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const { content, user } = comment;
  return (
    <div className="flex space-y-1 flex-col mx-4 my-8">
      <div className="text-gray-50 text-lg xl:text-2xl">{user}</div>
      <div className="text-gray-400 ml-1">{content}</div>
    </div>
  );
};

export default Comment;
