import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home"
import AllNotice from "../Pages/AllNotice/AllNotice";
import Lab from "../Pages/lab/Lab";
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
      }
    ],
  },
]);

export default router;
