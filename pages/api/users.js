const get = async (url, token) => {
  console.log("📩", url);
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "X-Authorization": token,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log("📦", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async (req, res) => {
  const url = `${process.env.CHEC_API_URL}/customers`;
  const result = await get(url, process.env.CHEC_SECRET_KEY);
  res.statusCode = 200;
  res.json(result);
};
