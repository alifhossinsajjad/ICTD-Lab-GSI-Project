import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AllNotice from "../Pages/AllNotice/AllNotice";
import Lab from "../Pages/lab/Lab";
import Login from "../Pages/login/Login";
import PrivetRoute from "./PrivetRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "../layout/DashboardLayout";
import ListOffAllLabs from "../Pages/Dashboard/ListOfAllLabs/ListOfAllLabs";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Traning from "../Pages/Dashboard/Traning/Traning";
import LabsUnderControl from "../Pages/Dashboard/LabsUnderControls/LabsUnderControl";
import Complaints from "../Pages/Dashboard/Complaints/Complaints";
import ChangePassWord from "../Pages/Dashboard/ChangePassword/ChangePassWord";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-notice",
        Component: AllNotice,
      },
      {
        path: "lab",
        Component: Lab,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "dashboard",
    element: (
     
        <DashboardLayout />

    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "list-of-all-labs",
        Component: ListOffAllLabs,
      },
      {
        path: "items-profile",
        Component: Profile,
      },
      {
        path: "items-training",
        Component: Traning,
      },
      {
        path: "labs-under-control",
        Component: LabsUnderControl,
      },
      {
        path: "items-complaints",
        Component: Complaints,
      },
      {
        path: "change-password",
        Component: ChangePassWord,
      },
    ],
  },
]);

export default router;
