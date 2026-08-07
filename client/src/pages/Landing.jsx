import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";

function Landing() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        {/* Statistics */}

        <section className="stats-section">

          <div className="stat-card">
            <span>👨‍🎓</span>
            <h2>10K+</h2>
            <p>Students Joined</p>
          </div>

          <div className="stat-card">
            <span>🔥</span>
            <h2>60</h2>
            <p>Challenge Days</p>
          </div>

          <div className="stat-card">
            <span>💻</span>
            <h2>2L+</h2>
            <p>GitHub Commits</p>
          </div>

          <div className="stat-card">
            <span>🏆</span>
            <h2>500+</h2>
            <p>Placements</p>
          </div>

        </section>

        {/* Why Join */}

        <section className="features">

          <h2>Why Join ABTalks?</h2>

          <div className="feature-container">

            <FeatureCard
              icon={<FaCode />}
              title="Build Real Projects"
              description="Create practical projects every day to strengthen your portfolio."
            />

            <FeatureCard
              icon={<FaGithub />}
              title="Maintain GitHub Streak"
              description="Show consistency through daily commits recruiters can verify."
            />

            <FeatureCard
              icon={<FaLinkedin />}
              title="Grow LinkedIn Presence"
              description="Share your learning journey and build your professional brand."
            />

            <FeatureCard
              icon={<FaTrophy />}
              title="Earn Achievements"
              description="Unlock badges and celebrate milestones throughout the challenge."
            />

          </div>

        </section>

        {/* How It Works */}

        <section className="timeline">

          <h2>How It Works</h2>

          <div className="timeline-card">
            <div className="step">
              <span>1️⃣</span>
              <p>Choose a Track</p>
            </div>

            <FaArrowRight className="arrow"/>

            <div className="step">
              <span>2️⃣</span>
              <p>Build Daily</p>
            </div>

            <FaArrowRight className="arrow"/>

            <div className="step">
              <span>3️⃣</span>
              <p>Commit on GitHub</p>
            </div>

            <FaArrowRight className="arrow"/>

            <div className="step">
              <span>4️⃣</span>
              <p>Share on LinkedIn</p>
            </div>

          </div>

        </section>

        {/* Student Journey */}

        <section className="journey">

          <h2>Your 60-Day Journey</h2>

          <div className="journey-card">

            <div className="journey-item">
              <h3>Day 1</h3>
              <p>🚀 Beginner</p>
            </div>

            <div className="journey-item">
              <h3>Day 30</h3>
              <p>🔥 Consistent</p>
            </div>

            <div className="journey-item">
              <h3>Day 60</h3>
              <p>🏆 Portfolio Ready</p>
            </div>

          </div>

        </section>

        {/* Testimonials */}

        <section className="testimonials">

          <h2>What Students Say</h2>

          <div className="testimonial">

            <p>
              ⭐⭐⭐⭐⭐
            </p>

            <h4>
              "I became consistent for the first time and landed internship
              interviews."
            </h4>

            <span>- Ayush Sharma</span>

          </div>

          <div className="testimonial">

            <p>
              ⭐⭐⭐⭐⭐
            </p>

            <h4>
              "My GitHub profile completely changed after completing the
              challenge."
            </h4>

            <span>- Riya Singh</span>

          </div>

        </section>

        {/* CTA */}

        <section className="cta">

          <h2>Ready to Begin?</h2>

          <p>
            Join India's fastest-growing coding consistency community today.
          </p>

          <button>
            Start Your 60-Day Challenge
          </button>

        </section>

      </main>

    </>
  );
}

export default Landing;