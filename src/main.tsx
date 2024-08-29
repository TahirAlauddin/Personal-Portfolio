import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ErrorPage from "./error-page.tsx";
import PortfolioDetailPage from "./screens/portfolio.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioDetailPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
