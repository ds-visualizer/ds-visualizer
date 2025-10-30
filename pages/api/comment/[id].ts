import { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";
import { User } from "@supabase/supabase-js";
import { Comment } from "@Root/interface/Comment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const jwt_secret = process.env["JWT_SECRET"];
      const { jwt_token }: any = req.headers;
      const { id } = req.query;

      if (!jwt_secret) return res.status(501).send("No token");

      if (typeof id === "object") return res.status(400).send("Wrong params");

      let data: User;
      try {
        data = jwt.verify(jwt_token, jwt_secret) as User;
      } catch (_e) {
        return res.status(400).send("Invalid Token");
      }

      // Database removed - return success without checking
      return res.status(200).send("Deleted the comment");
    } catch (e) {
      console.log(e);
      return res.status(500).send("Server Error");
    }
  } else if (req.method == "GET") {
    const { id } = req.query;

    if (!id || typeof id !== "string") return;

    // Database removed - return empty array
    const comments: Comment[] = [];

    res.send(comments);
  } else res.status(405).end("Method not allowed");
}
