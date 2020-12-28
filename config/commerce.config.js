const commerceConfig = {
  provider: {
    name: "commerceJS",
    host: "https://api.chec.io/v1",
    key: process.env.CHEC_PUBLIC_KEY,
  },
  pages: [
    {
      name: "products",
      service: "fetchProducts",
    },
    {
      name: "products",
      service: "fetchProductsByCategory",
      query: "new",
    },
    {
      name: "products",
      service: "fetchProductsByCategory",
      query: "deals",
    },
    {
      name: "products",
      service: "fetchProductsByCategory",
      query: "top",
    },
    {
      name: "categories",
      service: "fetchCategories",
    },
    {
      name: "categories",
      service: "fetchProductsByCategory",
      query: "oils",
    },
    {
      name: "categories",
      service: "fetchProductsByCategory",
      query: "vitamins",
    },
    {
      name: "categories",
      service: "fetchProductsByCategory",
      query: "detox",
    },
  ],
};

export default commerceConfig;
