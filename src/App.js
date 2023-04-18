import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error";
import Accueil from "./users/Accueil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <Error />,
  },
  {
    path: "/registerPatient",
    element: <Accueil />,
    errorElement: <Error />,
  },
  {
    path: "/registerPro",
    element: <Accueil />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Accueil />,
    errorElement: <Error />,
  },
  {
    path: "/profile",
    element: <Accueil />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
