import { useState, useContext } from "react";
import { loginService } from "../../services/auth.services.js";

import { AuthContext } from "../../context/auth.context.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    // ... login logic here
    const user = {
      email,
      password,
    };

    try {
      // validaremos al usuario
      const response = await loginService(user);
      // console.log("usuario validado", response.data)
      // guardamos el token en localStorage
      localStorage.setItem("authToken", response.data.authToken);
      authenticateUser();
      // asignar los valores a los estados globales para manejo en el FE
      navigate("/");
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        // navigate
        navigate("/error");
      }
    }
  };

  return (
    <div className="form">
      <h1>Log In</h1>
      <div className="wrapper">

      <form onSubmit={handleLogin}>
        <div className="row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <br />
        <div className="row">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <br />

        {errorMessage !== null && <p>{errorMessage}</p>}
        <div className="row">
          <button type="submit">Login</button>
        </div>
        
      </form>
</div>
    </div>
  );
}

export default Login;
