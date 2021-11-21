import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "@Root/prisma/prisma.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
  }

  if (req.method !== "GET") res.status(405).end("Method not allowed");

  const { id } = req.query;

  if (!id || typeof id !== "string") return;

  const comments = await Prisma.comment.findMany({
    where: {
      parent: id,
    },
  });

  res.send(comments);
}
