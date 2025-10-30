import React from "react";
import { Comment as IComment } from "@Root/interface/Comment";
import Image from "next/image";
import { motion } from "framer-motion";
import useGlobalContext from "@Hooks/useGlobalContext";
import axios from "axios";

interface Props {
  comment: IComment;
  deleteComment: (id: string) => void;
}

const Comment: React.FC<Props> = ({ comment, deleteComment }) => {
  const { content, user, email, id } = comment;
  const { state } = useGlobalContext();
  const { user: globalUser } = state;
  const supabase = JSON.parse(localStorage.getItem("supabase.auth.token")!);

  return (
    <motion.div
      id={id}
      layout
      initial={{
        scale: 0.8,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      className="flex relative space-y-2 flex-col mx-4 my-8"
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
      <div className="absolute right-0 bottom-0 text-red-400">
        {globalUser && globalUser.email == email && (
          <div>
            <button
              onClick={async () => {
                try {
                  const jwtToken = supabase?.currentSession.access_token;

                  await axios.delete(`/api/comment/${id}`, {
                    headers: {
                      JWT_TOKEN: jwtToken,
                    },
                  });

                  deleteComment(id);
                } catch (e: any) {
                  console.log(e.message);
                }
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Comment;
