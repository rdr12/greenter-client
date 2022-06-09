import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import logo from "assets/logo-greenter.png";

function Navbar() {
  const { isLoggedIn, user, authenticateUser } = useContext(AuthContext);

  const toggleStyles = (navInfo) => {
    return navInfo.isActive === true ? activeStyles : inActiveStyles;
  };

  const activeStyles = {
    textDecoration: "underline",
  };

  const inActiveStyles = {
    textDecoration: "none",
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  return (
    <div className="">
      {isLoggedIn === true ? (
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="logo"
            />

            <NavLink to="/" style={toggleStyles}>
              {" "}
              Home{" "}
            </NavLink>
            <NavLink to="/plantas" end={true} style={toggleStyles}>
              {" "}
              Plantas Medicinales{" "}
            </NavLink>
            <NavLink to="/plantas/PlantaAdd" end={true} style={toggleStyles}>
              {" "}
              Añadir una planta{" "}
            </NavLink>
            <NavLink to="/profile">Profile</NavLink>

            <NavLink to="/profile/edit">Edita el Profile</NavLink>
            <NavLink
              to="/"
              end={true}
              style={toggleStyles}
              onClick={handleLogout}
            >
              {" "}
              Cerrar sesión{" "}
            </NavLink>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
            <NavLink to="/" style={toggleStyles}>
              {" "}
              Home{" "}
            </NavLink>
            <NavLink to="/plantas" end={true} style={toggleStyles}>
              {" "}
              Plantas Medicinales{" "}
            </NavLink>
            <NavLink to="/signup" style={toggleStyles}>
              {" "}
              Registro{" "}
            </NavLink>
            <NavLink to="/login" style={toggleStyles}>
              {" "}
              Acceder{" "}
            </NavLink>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
