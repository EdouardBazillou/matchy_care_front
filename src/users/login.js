import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
        return response.json();
      })
      .then((response) => {
        console.log("response", response);
        if ((response.success = true)) {
          navigate("/");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="Email"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            className="Password"
            placeholder="mot de passe"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="log">
          Me connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
