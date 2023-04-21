import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error";
import Accueil from "./users/Accueil";
import Login from "./users/login";
import RegisterPatient from "./users/registerPatient";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <Error />,
  },
  {
    path: "/registerPatient",
    element: <RegisterPatient/>,
    errorElement: <Error />,
  },
  {
    path: "/registerPro",
    element: <Accueil />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
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
