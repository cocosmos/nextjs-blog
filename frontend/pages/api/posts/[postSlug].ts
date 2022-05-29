import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  res.end(`Post: ${slug}`);
  /* res.status(200).json(post); */
  console.log(req);
  /* posts.map((post) => {
    if (req === post.slug) {
    }
  }); */
}
