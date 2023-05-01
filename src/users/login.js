import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    };
    await fetch(`http://127.0.0.1:8000/api/login`, options)
      .then((response) => {
        if (response.ok) {
          return response.json(); // Convertit la réponse en JSON
        }
        throw new Error("Adresse email ou mot de passe incorrect.");
      })
      .then((data) => {
        // Traitez les données JSON ici
        console.log(data);
        navigate("/");
        // Utilisez la réponse JSON ici
        // console.log(data.message);
        // console.log(data.email);
        console.log(data.account);
        // on envoie le type de compte en local storage pour identifier le type de connexion
        localStorage.setItem("account", JSON.stringify(data.account));
        localStorage.setItem("id", JSON.stringify(data.id));
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error(error.message);
      });
  };

  return (
    <div>
      <Header title="Bienvenue sur Matchy Care" />
      <form onSubmit={handleSubmit} className="loginForm">
        <div>
          <h5>Connexion</h5>
          <input
            type="text"
            className="loginInput Email"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            className="loginInput Password"
            placeholder="mot de passe"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="log">
          Me connecter
        </button>
        <Link to="/password-reset">Mot de passe oublié ?</Link>
      </form>
    </div>
  );
}

export default Login;
