import { useParams } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";

const challenges = {
  1: {
    title: "Create Your First React Component",
    description:
      "Build a simple React component and understand how JSX and components work.",
    objectives: [
      "Understand React components",
      "Write JSX",
      "Use props",
      "Create a reusable component",
    ],
  },

  2: {
    title: "Build a Responsive Card",
    description:
      "Create a responsive card using HTML, CSS, Flexbox, and responsive design.",
    objectives: [
      "Use Flexbox",
      "Create responsive layouts",
      "Style cards with CSS",
      "Improve UI spacing",
    ],
  },

  3: {
    title: "Create a Navigation Bar",
    description:
      "Build a responsive navigation bar with links and a mobile-friendly layout.",
    objectives: [
      "Create navigation links",
      "Use React Router",
      "Style navigation",
      "Make the navbar responsive",
    ],
  },

  12: {
    title: "Build a Responsive React Component",
    description:
      "Create a reusable React component using clean code and make sure it works on different screen sizes.",
    objectives: [
      "Responsive Design",
      "React Components",
      "Flexbox & Grid",
      "Clean UI Design",
      "Reusable Code",
    ],
  },
};

function ChallengeDay() {
  const { day } = useParams();

  const challenge = challenges[day] || {
    title: `Coding Challenge — Day ${day}`,
    description:
      "Complete today's coding challenge and continue building your development skills.",
    objectives: [
      "Problem Solving",
      "Clean Code",
      "Responsive Design",
      "GitHub Practice",
    ],
  };

  return (
    <>
      <Navbar />

      <main>

        <div className="challenge-header">

          <p className="badge">
            🚀 60-Day Coding Challenge
          </p>

          <h1>Day {day}</h1>

          <p>
            Complete today's challenge and keep building your coding streak.
          </p>

        </div>

        <div className="challenge-card">

          <h2>🎯 Today's Challenge</h2>

          <h3>{challenge.title}</h3>

          <p>
            {challenge.description}
          </p>

        </div>

        <div className="challenge-card">

          <h2>📚 Learning Objectives</h2>

          <ul className="requirement-list">

            {challenge.objectives.map((objective, index) => (
              <li key={index}>
                ✅ {objective}
              </li>
            ))}

          </ul>

        </div>

        <div className="challenge-card">

  <h2>📋 Submission Checklist</h2>

  <ul className="requirement-list">
    <li>Complete the challenge</li>
    <li>Push your code to GitHub</li>
    <li>Share your progress</li>
  </ul>

  <input
    className="submit-input"
    type="text"
    placeholder="Paste your GitHub repository URL"
    id="githubUrl"
  />

  <button
    className="primary-btn"
    onClick={() => {
      const url = document.getElementById("githubUrl").value.trim();

      if (!url) {
        alert("Please enter your GitHub repository URL.");
        return;
      }

      if (!url.startsWith("https://github.com/")) {
        alert("Please enter a valid GitHub URL.");
        return;
      }

      alert("Challenge submitted successfully! 🎉");
    }}
  >
    Submit Challenge →
  </button>

</div>
      </main>

      <BottomNav />
    </>
  );
}

export default ChallengeDay;