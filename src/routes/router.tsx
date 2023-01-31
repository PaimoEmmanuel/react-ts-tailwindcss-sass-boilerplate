import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;
