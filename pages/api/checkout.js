import { post } from "../../server/shared";

export default async (req, res) => {
  res.statusCode = 200;
  res.json("foo");
};