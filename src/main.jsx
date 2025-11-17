import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import CanvasDetail from "./page/CanvasDetail";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import ErrorPage from "./page/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "canvases/:id",
        element: <CanvasDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
