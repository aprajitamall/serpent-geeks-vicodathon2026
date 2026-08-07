import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <p className="badge">
        🚀 India's 60-Day Coding Challenge
      </p>

      <h1>
        Build Skills.
        <br />
        Create Projects.
        <br />
        Get Noticed.
      </h1>

      <p className="hero-text">
        ABTalks helps students build real-world projects,
        maintain coding consistency, and showcase their
        learning journey to recruiters.
      </p>

      <button className="primary-btn">
        Start Your Challenge
        <FaArrowRight />
      </button>

    </section>
  );
}

export default Hero;