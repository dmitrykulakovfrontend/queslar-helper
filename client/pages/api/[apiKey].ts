// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      error: string;
    }
  | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const apiKey = req.query.apiKey;
  const response = await fetch(`https://queslar.com/api/player/full/${apiKey}`);
  if (response.status !== 200) {
    return res.status(500).json({ error: response.statusText });
  }
  const data = await response.json();
  if (data.kingdom.overview[0][0].name !== "Roman Empire") {
    return res.status(401).json({ error: "Not a roman" });
  }

  const Days14InSeconds = 14 * 24 * 60 * 60;

  setCookie("apiKey", apiKey, {
    httpOnly: true,
    secure: true,
    maxAge: Days14InSeconds,
    req,
    res,
  });
  res.status(200).json({ message: "All good" });
}
