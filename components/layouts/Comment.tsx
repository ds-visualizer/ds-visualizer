import React from "react";
import { Comment as IComment } from "@prisma/client";

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const { content, user } = comment;
  return (
    <div className="flex space-y-1 flex-col mx-4">
      <div className="text-gray-50 text-lg xl:text-xl">{user}</div>
      <div className="text-gray-300">{content}</div>
    </div>
  );
};

export default Comment;
