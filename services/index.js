import commerceConfig from "../config/commerce.config";
import fetchProducts from "./productService";

const executeService = (page, tab) => {
    const pageCfg = commerceConfig.pages.find((p) => p.name === page);
    if (pageCfg.service === "fetchProducts") {
      return fetchProducts(commerceConfig.api, tab);
    }
  };

export default executeService;