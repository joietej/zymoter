import { post } from "../../server/shared";

export default async (req, res) => {
  let result;

  if (req.method === "POST") {
    // Process a POST request
    const user = req.body;
    if (user) {
      result = post(
        `${process.env.CHEC_API_URL}/customers`,
        process.env.CHEC_SECRET_KEY,
        user
      );
    } else {
      res.statusCode = 422;
      res.end();
    }
  } else {
    // Handle any other HTTP method4
    const id = req.query.id;
    const url = `${process.env.CHEC_API_URL}/customers/${id}`;
    const response = await fetch(url);
    result = await response.json();
  }
  res.statusCode = 200;
  res.json(result);
};
