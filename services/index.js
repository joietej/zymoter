import commerceConfig from "../config/commerce.config";
import commerce from "../lib/commerceClient";

const executeService = async (page = "", tab = "") => {
  const predicate = (p) =>
    tab ? p.name === page && p.query === tab : p.name === page;

  const pageCfg = commerceConfig.pages.find(predicate);

  console.log(pageCfg);

  switch (pageCfg?.service) {
    case "Products":
      return (await commerce.products.list())?.data || [];
    case "Categories":
      return await commerce.categories.list();
    case "ProductsByCategory":
      return (await commerce.products.list({ category_slug: tab }))?.data || [];
    default:
      return [];
  }
};

export default executeService;
