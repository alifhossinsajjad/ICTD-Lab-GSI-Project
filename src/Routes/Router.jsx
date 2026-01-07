import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AllNotice from "../Pages/AllNotice/AllNotice";
import Lab from "../Pages/Dashboard/lab/Lab";
import LabDetails from "../Pages/LabDetails/LabDetails";
import Login from "../Pages/login/Login";
import PrivetRoute from "./PrivetRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "../layout/DashboardLayout";

import Profile from "../Pages/Dashboard/Profile/Profile";
import Traning from "../Pages/Dashboard/Traning/Traning";
import LabsUnderControl from "../Pages/Dashboard/LabsUnderControls/LabsUnderControl";
import Complaints from "../Pages/Dashboard/Complaints/Complaints";
import ChangePassWord from "../Pages/Dashboard/ChangePassword/ChangePassWord";
import LabsUpdate from "../Pages/Dashboard/LabsUnderControls/LabsControl/LabsUpdate/LabsUpdate";
import FilesComplaints from "../Pages/Dashboard/LabsUnderControls/LabsControl/FilesComplaints/FilesComplaints";
import TraningUpdate from "../Pages/Dashboard/Traning/TraningUpdate/TraningUpdate";
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
        path: "labdetails",
        Component: LabDetails,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "labs",
        Component: Lab,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "traning",
        Component: Traning,
      },
      {
        path: "labsUnderControl",
        Component: LabsUnderControl,
      },
      {
        path: "complaints",
        Component: Complaints,
      },
      {
        path: "changePassword",
        Component: ChangePassWord,
      },
      {
        path: 'labsUpdate',
        Component: LabsUpdate,
      },
      {
        path: "filesComplaints",
        Component : FilesComplaints,
      },
      {
        path : "trainingUpdate",
        Component: TraningUpdate
      }
    ],
  },
]);

export default router;
