import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  //   if (method === "GET") {
  //     res.status(200).json("getting task");
  //   } else if (method === "PUT") {
  //     res.status(200).json("putting task");
  //   } else {
  //     res.status(200).json("huh ?");
  //   }

  switch (method) {
    case "GET":
      res.status(200).json("getting task");
      break;
    case "POST":
      res.status(200).json("posting task");
      break;
    case "PUT":
      res.status(200).json("putting task");
      break;
    case "DELETE":
      res.status(200).json("deleting task");
      break;
    default:
      res.status(400).json("ha ?");
      break;
  }
};
