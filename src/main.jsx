import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Routes/Router.jsx";
import "./components/languages/language/i18n.js";
// TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//  Create client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);