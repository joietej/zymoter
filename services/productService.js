import { get } from "./api";

const fetchProducts = async (provider, category) => {
  switch (provider) {
    case "commerceJS":
      const res= await get(
        `https://api.chec.io/v1/products?limit=25&category_slug=${category}`,
        process.env.CHEC_PUBLIC_KEY
      );
      return res.data ;
    default:
      return Promise.resolve([]);
  }
};

export default fetchProducts;
