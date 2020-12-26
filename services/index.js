import commerceConfig from "../config/commerce.config";
import fetchProducts from "./productService";

const executeService = (page) => {
    const pageCfg = commerceConfig.pages.find((p) => p.name === page);
    if (pageCfg.service === "fetchProducts") {
      return fetchProducts(commerceConfig.api);
    }
  };

export default executeService;