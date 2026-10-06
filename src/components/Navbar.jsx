
import { Link, NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        SAVOR<span>.</span>
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">
          Cart ({cartCount})
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;