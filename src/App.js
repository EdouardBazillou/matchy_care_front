import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error";
import Accueil from "./users/Accueil";
import Profil from "./components/Profil";
import Login from "./users/login";
import RegisterPatient from "./users/registerPatient";
import RegisterPro from "./users/RegisterPro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <Error />,
  },
  {
    path: "/registerPatient",
    element: <RegisterPatient />,
    errorElement: <Error />,
  },
  {
    path: "/registerPro",
    element: <RegisterPro />,
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
  {
    path: "/professional/:id",
    element: <Profil />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
