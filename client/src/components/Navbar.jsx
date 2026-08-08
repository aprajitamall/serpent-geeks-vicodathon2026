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
        <Link to="/challenge">Challenge</Link>
      </div>

      <Link to="/challenge" className="join-btn">
        Join Now
      </Link>

    </nav>
  );
}

export default Navbar;