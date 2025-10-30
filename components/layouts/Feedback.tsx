import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Comment as IComment } from "@Root/interface/Comment";
import Comment from "./Comment";
import CommentInput from "./Comment.Input";
import useGlobalContext from "@Root/hooks/useGlobalContext";
import useError from "@Hooks/useError";
import { AnimateSharedLayout } from "framer-motion";

interface Props {}

const Feedback: React.FC<Props> = () => {
  const router = useRouter();
  const [commentForm, setCommentForm] = useState({
    comment: "",
  });
  const [comments, setComments] = useState<Array<IComment>>([]);

  const {
    state: { user },
  } = useGlobalContext();

  const [err, setErr] = useError();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<Array<IComment>>(
          `/api/comment?path=${router.pathname}`
        );

        setComments(res.data);
      } catch (e: any) {}
    })();

    return () => setComments([]);
  }, [router.pathname]);

  const deleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id != id));
  };

  return (
    <div className="px-3">
      <div className="underline text-white text-lg xl:text-3xl tracking-wider font-mono my-7">
        Feedbacks
      </div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            if (!user) throw new Error("Must be logged in");
            if (!commentForm.comment)
              throw new Error("Comment field must not be empty");

            const body = {
              content: commentForm.comment,
              path: router.pathname,
              user: user.user_metadata.user_name,
              email: user.email,
            };

            const res = await axios.post("/api/comment", body);
            setComments([res.data, ...comments]);
            setCommentForm({ ...commentForm, comment: "" });
          } catch (e: any) {
            setErr(e.message);
          }
        }}
      >
        <div className="relative">
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
          {err && (
            <div className="absolute bottom-0 left-10 text-red-600 bold">
              {err}
            </div>
          )}
        </div>
      </form>

      <AnimateSharedLayout>
        {comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            deleteComment={deleteComment}
          />
        ))}
      </AnimateSharedLayout>
    </div>
  );
};

export default Feedback;
