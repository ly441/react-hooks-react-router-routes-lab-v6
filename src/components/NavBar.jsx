import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">home</NavLink>
      <NavLink to="/directors">directors</NavLink>
      <NavLink to="/actors">actors</NavLink>

    
    </nav>
    );
};

export default NavBar;
