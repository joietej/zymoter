import commerceConfig from "../config/commerce.config";
import * as productServices from "./api";

const executeService = async (page = "", tab = "") => {
  const predicate = (p) =>
    !!tab ?  p.name === page && p.query === tab : p.name === page;

  const pageCfg = commerceConfig.pages.find(predicate);

  console.log(pageCfg.service);

  switch (pageCfg?.service) {
    case "fetchProducts":
    case "fetchCategories":
      return await productServices.fetchAll(commerceConfig.provider, page);
    case "fetchProductsByCategory":
      return await productServices.fetchByQuery(
        commerceConfig.provider,
        page,
        `category_slug=${tab}`
      );
    case "createCart":
      return {};//return await productServices.getOrCreate(commerceConfig.provider, page);
    default:
      return [];
  }
};

export default executeService;
