import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Student Dashboard</h1>

        <p>
          Welcome to your ABTalks 60-Day Coding Challenge dashboard.
        </p>

        <div>
          <h2>🔥 Current Streak</h2>
          <p>12 Days</p>
        </div>

        <div>
          <h2>Today's Task</h2>
          <p>
            Build a responsive React component.
          </p>
        </div>

        <div>
          <h2>Progress</h2>
          <p>
            18 / 60 Days Completed
          </p>
        </div>

      </main>

      <BottomNav />
    </>
  );
}

export default Dashboard;