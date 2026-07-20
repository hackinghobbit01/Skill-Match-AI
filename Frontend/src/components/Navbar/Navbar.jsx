import "./Navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { useAuth } from "../../features/auth/hooks/useAuth";

const Navbar = () => {
  const { handleLogout } = useAuth();

  const logoutUser = async () => {
    await handleLogout();
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="SkillMatch AI Logo" />
        <span className="brand-name">SkillMatch AI</span>
      </NavLink>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          History
        </NavLink>

        <button
          className="logout-btn"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;