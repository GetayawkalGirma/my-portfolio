import { NavLink } from "react-router-dom";
import { FaSun, FaMoon, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ darkMode, toggleTheme }: NavbarProps) => {
  return (
    <nav className="navbar fixed-nav">
      <div className="nav-container-desktop">
        <div className="nav-logo">GG</div>

        {/* Mobile/Desktop Persistent Tabs */}
        <div className="nav-tabs">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-tab active" : "nav-tab"
            }
          >
            <span className="tab-icon">
              <FaUser />
            </span>
            <span className="tab-text">About</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-tab active" : "nav-tab"
            }
          >
            <span className="tab-icon">
              <FaCode />
            </span>
            <span className="tab-text">Projects</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-tab active" : "nav-tab"
            }
          >
            <span className="tab-icon">
              <FaEnvelope />
            </span>
            <span className="tab-text">Contact</span>
          </NavLink>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
