
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <p className="badge">
        🚀 India's 60-Day Coding Challenge
      </p>

      <h1>
        Build Every Day.
        <br />
        Get Better Every Day.
      </h1>

      <p className="hero-text">
        ABTalks helps students build real-world projects,
        maintain coding consistency, and showcase their
        learning journey to recruiters.
      </p>

      <div className="hero-buttons">

        <Link to="/challenge" className="primary-btn">
          Start Your Challenge
          <FaArrowRight />
        </Link>

        <Link to="/dashboard" className="secondary-btn">
          Learn More
        </Link>

      </div>

    </section>
  );
}

export default Hero;