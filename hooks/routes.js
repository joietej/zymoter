import { useRouter } from "next/router";
import routes from "../config/routes";

const useRoutes = () => {
  const router = useRouter();

  const { page = "", tab = "" } = router.query;
  const { pathname } = router;

  let route = routes.find((r) => r.path === `/${page}`) || routes[0];
  const subRoute = route.sub && route.sub.find((r) => r.path === `/${tab}`);

  if (pathname === "/_error") {
    route = { path: "/_error", name: "Error" };
  }

  const onTabClick = (path) => {
    router.push(route.path + path);
  };

  return { route, subRoute, pathname, page, tab, onTabClick };
};

export default useRoutes;
