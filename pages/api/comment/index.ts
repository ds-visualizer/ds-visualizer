import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@Root/prisma/prisma.config";
import { Comment } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { content, parent, path, user }: Comment = req.body;

      if (!(content && parent && path && user))
        return res.status(400).send("Invalid body");

      const newComment = await prisma.comment.create({
        data: { content, parent, path, user },
      });

      res.status(200).json(newComment);
    } catch (_e) {
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

    const comments = await prisma.comment.findMany({ where: { path } });

    res.status(200).json(comments);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
}
