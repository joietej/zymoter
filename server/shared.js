export const post = async (url, token, payload) => {
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
