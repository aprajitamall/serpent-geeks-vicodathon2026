import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

function ChallengeDay() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Day 12 Challenge</h1>

        <h2>Build a Responsive Dashboard</h2>

        <p>
          Create a mobile-first dashboard using React. Focus on reusable
          components and clean UI.
        </p>

        <h3>Requirements</h3>

        <ul>
          <li>Create reusable React components</li>
          <li>Push your code to GitHub</li>
          <li>Share your progress on LinkedIn</li>
        </ul>

        <h3>Submit Proof of Work</h3>

        <input type="text" placeholder="GitHub Repository Link" />

        <br />

        <input type="text" placeholder="LinkedIn Post Link" />

        <br />

        <button>Submit</button>
      </main>

      <BottomNav />
    </>
  );
}

export default ChallengeDay;
