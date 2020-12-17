import React from "react";
import routes from "../../config/routes";
import PageTabs from "../../components/PageTabs";

const route = routes.find((r) => r.name === "User");

const User = () => {
  return (
    <PageTabs route={route}>
        User
    </PageTabs>
  );
};

User.title = "User";

export default User;
