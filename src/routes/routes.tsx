import App from "@/App";
import DashBoardLayout from "@/components/layouts/DashBoardLayout";
import About from "@/pages/About";
import DashboardHome from "@/pages/DashboardHome";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, //index:true when hit / it's got to this page
      { path: "about", element: <About /> },
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
