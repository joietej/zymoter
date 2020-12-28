import commerceConfig from "../config/commerce.config";
import * as productServices from "./api";

const executeService = (page = "", tab = "") => {
  const predicate = (p) => !!tab
    ? (p) => p.name === page && p.query === tab
    : (p) => p.name === page;

  const pageCfg = commerceConfig.pages.find(predicate);

  switch (pageCfg?.service) {
    case "fetchProducts":
    case "fetchCategories":
      return productServices.fetchAll(commerceConfig.provider, page);
    case "fetchProductsByCategory":
      return productServices.fetchByQuery(commerceConfig.provider, page, `category_slug=${tab}`);
    default:
      return [];
  }
};

export default executeService;
