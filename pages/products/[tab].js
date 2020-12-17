import React from "react";
import routes from "../../config/routes";
import PageTabs from "../../components/PageTabs";

const route = routes.find((r) => r.name === "Products");

const Products = () => {
  return (
    <PageTabs route={route}>
        Products
    </PageTabs>
  );
};

Products.title = "Products";

export default Products;
