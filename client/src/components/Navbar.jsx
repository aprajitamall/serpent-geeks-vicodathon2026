import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <FaFire className="logo-icon" />
        ABTalks
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/day/12">Challenge</Link>
      </div>

      <button className="join-btn">
        Join Now
      </button>

    </nav>
  );
}

export default Navbar;