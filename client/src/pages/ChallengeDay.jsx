import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

function ChallengeDay() {
  return (
    <>
      <Navbar />

      <main>

        <section className="challenge-header">

          <h1>Day 12 Challenge 🚀</h1>

          <p>
            Responsive Landing Page
          </p>

        </section>

        <section className="challenge-card">

          <h2>📚 Challenge Description</h2>

          <p>
            Build a modern responsive landing page using React.
            Use reusable components and ensure the UI works
            perfectly on desktop, tablet and mobile.
          </p>

        </section>

        <section className="challenge-card">

          <h2>🎯 Learning Objectives</h2>

          <ul className="requirement-list">

            <li>Responsive Design</li>

            <li>React Components</li>

            <li>Flexbox & Grid</li>

            <li>Clean UI Design</li>

            <li>Reusable Code</li>

          </ul>

        </section>

        <section className="challenge-card">

          <h2>📋 Submission Checklist</h2>

          <ul className="requirement-list">

            <li>✅ GitHub Repository</li>

            <li>✅ Live Website</li>

            <li>✅ LinkedIn Post</li>

            <li>✅ Responsive UI</li>

          </ul>

        </section>

        <section className="challenge-card">

          <h2>🔗 Submit Your Work</h2>

          <input
            className="submit-input"
            type="text"
            placeholder="GitHub Repository Link"
          />

          <input
            className="submit-input"
            type="text"
            placeholder="Live Website Link"
          />

          <input
            className="submit-input"
            type="text"
            placeholder="LinkedIn Post Link"
          />

          <button className="primary-btn">
            Submit Challenge
          </button>

        </section>

      </main>

      <BottomNav />

    </>
  );
}

export default ChallengeDay;