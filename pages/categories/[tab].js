import React from "react";
import routes from "../../config/routes";
import PageTabs from "../../components/PageTabs";

const route = routes.find((r) => r.name === "Categories");

const Categories = () => {
  return (
    <PageTabs route={route}>
        Categories
    </PageTabs>
  );
};

Categories.title = "Categories";

export default Categories;
