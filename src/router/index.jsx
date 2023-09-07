import LoginPage from "../pages/login";
import SpeciePage from "../pages/species";
import WrapComponentRoute from "./config";
import { Outlet, useRoutes } from "react-router-dom";
import AddNew from "../pages/species/add-new";
import HomePage from "../pages/home";

const routerList = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/species",
    element: <WrapComponentRoute element={<Outlet />} auth />,
    children: [
      {
        path: "",
        element: <SpeciePage />,
      },
      {
        path: '/species/add-new',
        element:<AddNew />
      }
    ],
  },
];

export const RenderRouter = () => {
  const element = useRoutes(routerList);
  return element;
};
