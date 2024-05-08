import App from "@/App";
import DashBoardLayout from "@/components/layouts/DashBoardLayout";
import AllSupplyProducts from "@/pages/AllSupplyProducts";
import CardDetailsPage from "@/pages/CardDetailsPage";
import DashboardHome from "@/pages/DashboardHome";
import Home from "@/pages/Home";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, //index:true when hit / it's got to this page
      { path: "details/:id", element: <CardDetailsPage /> },
      { path: "supplies", element: <AllSupplyProducts /> },
      { path: "supplies/:id", element: <CardDetailsPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      { index: true, element: <DashboardHome /> }, //index:true when hit / it's got to this page
    ],
  },
]);
export default router;
