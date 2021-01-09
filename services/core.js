export const get = async (url, token) => {
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

export const getImage = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "image/webp,image/apng",
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const blob = await res.blob();
    const data = await convertBlobToBase64(blob);
    return data;
  } catch (error) {
    console.log(error);
  }
};

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

export const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
};
