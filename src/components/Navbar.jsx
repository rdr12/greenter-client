import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

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
    <div class="container-fluid">
      {user !== null && <p>Bienvenido: {user.username}</p>}

      {isLoggedIn === true ? (
        <nav class="navbar navbar-dark bg-dark">
          <img
            src="./src/assets/logo-greenter.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          ></img>

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
          <NavLink to="/profile">Profile Page</NavLink>

          <NavLink to="/profile/edit">Edit Profile</NavLink>
          <NavLink
            to="/"
            end={true}
            style={toggleStyles}
            onClick={handleLogout}
          >
            {" "}
            Cerrar sesión{" "}
          </NavLink>
        </nav>
      ) : (
        <nav>
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
        </nav>
      )}
    </div>
  );
}

export default Navbar;
