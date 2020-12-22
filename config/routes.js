import {
  Home32,
  Product32,
  Account32,
  Categories32,
  Settings32,
  LicenseGlobal32
} from "@carbon/icons-react";

const routes = [
  { name: "Home", icon: Home32, path: "/", position: "top", title: "Welcome !" },
  {
    name: "Products",
    path: "/products",
    icon: Product32,
    position: "top",
    sub: [
      { name: "New", path: "/new", title: 'New Arrivals !' },
      { name: "Deals", path: "/deals" , title :'Awesome Deals !'},
      { name: "Top", path: "/top", title: 'Top Products' },
    ],
  },
  {
    name: "Categories",
    path: "/categories",
    icon: Categories32,
    position: "top",
    sub: [
      { name: "Vitamins", path: "/vitamins" },
      { name: "Detox", path: "/detox" },
      { name: "Oils", path: "/oils" },
    ],
  },
  {
    name: "User",
    path: "/user",
    icon: Account32,
    position: "top",
    sub: [
      { name: "Account", path: "/account" },
      { name: "Orders", path: "/orders" },
      { name: "Payments", path: "/payments" },
    ],
  },
  { name: "Settings", path: "/settings", icon: Settings32, position: "bottom" },
  { name: "Legal", path: "/me", icon: LicenseGlobal32, position: "bottom", title: 'Who am I ?' },
];

export default routes;
