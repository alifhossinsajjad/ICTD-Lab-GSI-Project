import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home"
import AllNotice from "../Pages/AllNotice/AllNotice";
import Lab from "../Pages/lab/Lab";
import LabDetails from "../Pages/LabDetails/LabDetails";
import Login from "../Pages/login/Login";
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
      {
        path: "labdetails",
        Component: LabDetails,
      }

    ],
  },
  {
    path: "/login",
    Component: Login,
  }


]);

export default router;
