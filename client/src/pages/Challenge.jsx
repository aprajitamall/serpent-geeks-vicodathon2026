import ChallengeGrid from "../components/ChallengeGrid";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";

function Challenge() {
  return (
    <>
      <Navbar />

      <main>

        <div className="challenge-header">

          <p className="badge">
            🚀 India's 60-Day Coding Challenge
          </p>

          <h1>Your Coding Journey</h1>

          <p>
            Complete daily challenges, build projects,
            and stay consistent for 60 days.
          </p>

        </div>

        <div className="challenge-card">

          <h2>📊 Your Progress</h2>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{ width: "30%" }}
            ></div>

          </div>

          <div className="progress-footer">
            <span>18 / 60 Days</span>
            <span>30% Complete</span>
          </div>

        </div>

        <div className="challenge-card">

          <h2>📅 60-Day Challenge</h2>

          <ChallengeGrid />

        </div>

      </main>

      <BottomNav />
    </>
  );
}

export default Challenge;