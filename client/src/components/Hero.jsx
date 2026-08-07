import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <p className="badge">🚀 India's 60-Day Coding Challenge</p>

     <h1>
  Build Every Day.
  <br />
  Get Better Every Day.
</h1>
      <p className="hero-text">
  Join India's most exciting 60-day coding challenge.
  Build projects, maintain your GitHub streak, share your
  progress on LinkedIn, and become recruiter-ready.
</p>

    <div className="hero-buttons">

  <button className="primary-btn">
    Start Challenge
  </button>

  <button className="secondary-btn">
    Learn More
  </button>

</div>
    </section>
  );
}

export default Hero;
