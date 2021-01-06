const commerceConfig = {
  provider: {
    name: "commerceJS",
    host: "https://api.chec.io/v1",
    key: process.env.CHEC_PUBLIC_KEY,
  },
  pages: [
    {
      name: "products",
      service: "Products",
    },
    {
      name: "products",
      service: "ProductsByCategory",
      query: "new",
    },
    {
      name: "products",
      service: "ProductsByCategory",
      query: "deals",
    },
    {
      name: "products",
      service: "ProductsByCategory",
      query: "top",
    },
    {
      name: "categories",
      service: "Categories",
    },
    {
      name: "categories",
      service: "ProductsByCategory",
      query: "oils",
    },
    {
      name: "categories",
      service: "ProductsByCategory",
      query: "vitamins",
    },
    {
      name: "categories",
      service: "ProductsByCategory",
      query: "detox",
    },
  ],
};

export default commerceConfig;
