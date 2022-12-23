import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return res.json("getting a unique task");
    case "PUT":
      return res.json("putting a unique task");
    case "PUT":
      return res.json("deleting a unique task");
    default:
      return res.json("method not allowed");
  }
};
