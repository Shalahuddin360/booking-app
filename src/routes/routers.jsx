import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <PrivateRoutes> <About/></PrivateRoutes>
      },
    
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path :'/dashboard',
    element:<DashboardLayout/>
  }
]);
export default router;
