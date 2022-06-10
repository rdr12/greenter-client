import { useState } from "react";
import { signupService } from "../../services/auth.services.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
    // ... signup logic here
    const user = {
      username,
      email,
      password,
    };

    try {
      await signupService(user);
      console.log("todo bien");
      navigate("/login");
    } catch (error) {
      console.log(error.response.data.errorMessage); // el mensaje que enviamos desde el BE
      console.log(error.response.status); // el status
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        // ... navigate
        navigate("/error");
      }
    }
  };

  return (
    <div classname="container">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-4">
          <div className="mt-5">
            <h1 className="h1 mb-5">Sign Up</h1>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="user">Nombre:</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="constraseña">Contraseña:</label>
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
              <button
                className="btn btn-primary mt-1"
                type="submit">
                  Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
