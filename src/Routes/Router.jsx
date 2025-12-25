import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home"
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
