import { NextApiRequest, NextApiResponse } from "next";
import { Comment } from "@Root/interface/Comment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { content, parent, path, user, email }: Comment = req.body;
      if (!(content && path && user && email))
        return res.status(400).send("Invalid body");

      // Database removed - return mock data
      const newComment: Comment = {
        id: `mock-${Date.now()}`,
        content,
        parent: parent || null,
        path,
        user,
        email,
        timeStamp: new Date(),
      };

      res.status(200).json(newComment);
    } catch (e) {
      console.log(e);
      res.status(500).send("Server Error");
    }
    return;
  }

  if (req.method !== "GET") {
    res.status(405).end("Method not allowed");
  }

  try {
    const { path } = req.query;

    if (typeof path === "object") return res.status(400).end("Bad request");

    // Database removed - return empty array
    const comments: Comment[] = [];

    res.status(200).json(comments);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
}
