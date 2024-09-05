import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ErrorPage from "./error-page.tsx";
import PortfolioPage from "./screens/portfolio.tsx";
import { SinglePortFolio } from "./screens/portFolio.details.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/portfolio/:id",
    element: <SinglePortFolio />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
