import { createBrowserRouter } from "react-router-dom";
import AuthView from "../views/auth_view";
import AppView from "../views/app_view";
import Dashboard from "../views/app_view/Dashboard";
import BorkerManagment from "../views/app_view/BorkerManagment";
import { FaRegGem } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiNewspaperBold } from "react-icons/pi";

export const router = createBrowserRouter([
    { 
      path: "/auth", 
      children: [
        {
          path: "/auth/login",
          Component: AuthView
        }
      ]
    },
    { 
      path: "/app",
      Component: AppView,
      children: [
        {
          path: "/app/dashboard",
          Component: Dashboard,
          title: 'Dashboard',
          icon: <TbDeviceDesktopAnalytics fontSize={20} />
        },
        {
          path: "/app/stock-brokers",
          Component: BorkerManagment,
          title: 'Broker Management',
          icon: <FaRegGem fontSize={20} />
        },
        {
          path: "/app/new-and-updates",
          title: 'News & Updates',
          icon: <PiNewspaperBold fontSize={20} />,
          Component: BorkerManagment,
          
        },
      ] 
    },
]);