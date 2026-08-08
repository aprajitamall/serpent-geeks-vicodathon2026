import { useParams } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";

function ChallengeDay() {
  const { day } = useParams();

  return (
    <>
      <Navbar />

      <main>

        <div className="challenge-header">
          <p className="badge">🚀 60-Day Coding Challenge</p>

          <h1>Day {day}</h1>

          <p>
            Complete today's challenge and keep building your coding streak.
          </p>
        </div>

        <div className="challenge-card">

          <h2>🎯 Today's Challenge</h2>

          <h3>Build a Responsive React Component</h3>

          <p>
            Create a responsive React component using clean,
            reusable code and make sure it works on different
            screen sizes.
          </p>

        </div>

        <div className="challenge-card">

          <h2>📚 Learning Objectives</h2>

          <ul className="requirement-list">
            <li>✅ Responsive Design</li>
            <li>✅ React Components</li>
            <li>✅ Flexbox & Grid</li>
            <li>✅ Clean UI Design</li>
            <li>✅ Reusable Code</li>
          </ul>

        </div>

        <div className="challenge-card">

          <h2>📋 Submission Checklist</h2>

          <ul className="requirement-list">
            <li>✅ Complete the challenge</li>
            <li>✅ Push your code to GitHub</li>
            <li>✅ Share your progress</li>
          </ul>

          <input
            className="submit-input"
            type="text"
            placeholder="Paste your GitHub repository URL"
          />

          <button className="primary-btn">
            Submit Challenge →
          </button>

        </div>

      </main>

      <BottomNav />
    </>
  );
}

export default ChallengeDay;