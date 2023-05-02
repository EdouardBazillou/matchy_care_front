import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error";
import Accueil from "./users/Accueil";
import Profil from "./components/Profil";
import Login from "./users/login";
import RegisterPatient from "./users/registerPatient";
import RegisterPro from "./users/RegisterPro";
import TestStripe from "./components/testStripe";
import SendProInfo from "./components/admin/sendProInfo";
import MonProfil from "./components/MonProfil";
import PasswordReset from "./components/password-reset/passwordReset";

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
  {
    path: "/stripe",
    element: <TestStripe />,
    errorElement: <Error />,
  },
  {
    path: "/contact-admin",
    element: <SendProInfo />,
    errorElement: <Error />,
  },
  {
    path: "/MonProfil",
    element: <MonProfil />,
    path: "/password-reset",
    element: <PasswordReset />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
