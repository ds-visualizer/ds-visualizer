import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Comment as IComment } from "@prisma/client";
import Comment from "./Comment";
import CommentInput from "./Comment.Input";

interface Props {}

const Feedback: React.FC<Props> = () => {
  const router = useRouter();
  const [commentForm, setCommentForm] = useState({
    comment: "",
  });
  const [comments, setComments] = useState<Array<IComment>>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<Array<IComment>>(
          `/api/comment?path=${router.pathname}`
        );

        setComments(res.data);
      } catch (e) {}
    })();

    return () => setComments([]);
  }, [router.pathname]);

  return (
    <div className="px-3">
      <div className="underline text-white text-lg xl:text-3xl tracking-wider font-mono my-7">
        Feedbacks
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const body = {
            content: commentForm.comment,
            path: router.pathname,
            user: "Satvik",
          };
          try {
            const res = await axios.post("/api/comment", body);
            setComments([res.data, ...comments]);
            setCommentForm({ ...commentForm, comment: "" });
          } catch (e) {}
        }}
      >
        <div className="flex space-x-3 items-center justify-center">
          <div className="w-full">
            <CommentInput
              inputInfo={{
                name: "Comment",
                stateName: "comment",
                value: commentForm.comment,
              }}
              handleFormState={(stateName, value) => {
                setCommentForm({ ...commentForm, [stateName]: value });
              }}
            />
          </div>
          <div className="">
            <button className="bg-purple-500 px-4 py-2 rounded duration-300 hover:bg-purple-700 transition-colors shadow-2xl">
              Send
            </button>
          </div>
        </div>
      </form>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Feedback;
