import { Link } from "react-router-dom";
import { FaHome, FaChartLine, FaCalendarDay } from "react-icons/fa";

function BottomNav() {
  return (
    <nav className="bottom-nav">

      <Link to="/">
        <FaHome />
        <span>Home</span>
      </Link>

      <Link to="/dashboard">
        <FaChartLine />
        <span>Dashboard</span>
      </Link>

      <Link to="/day/12">
        <FaCalendarDay />
        <span>Challenge</span>
      </Link>

    </nav>
  );
}

export default BottomNav;