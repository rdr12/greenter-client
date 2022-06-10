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
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-8">
          <div className="form mt-5">
            <h1 className="h1 mb-5">Log In</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={handleEmailChange}
                />
              </div>

              <div className="form-group mb-1">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="form-control"
                />
              </div>
              {
                errorMessage !== null && (
                  <div class="alert alert-danger mt-2" role="alert">
                    {errorMessage}
                  </div>
                )
              }
              <button className="btn btn-primary mt-1" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
