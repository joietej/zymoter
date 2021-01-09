const post = async (url, token, payload) => {
  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json", "X-Authorization": token },
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

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
