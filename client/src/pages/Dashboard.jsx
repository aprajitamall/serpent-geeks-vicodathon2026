import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import StreakCard from "../components/StreakCard";
import ProgressCard from "../components/ProgressCard";
import TaskCard from "../components/TaskCard";
import AchievementCard from "../components/AchievementCard";
import AIStudyCoach from "../components/AIStudyCoach";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main>

        <div className="dashboard-header">

          <h1>Welcome Back 👋</h1>

          <p>
            Keep building. Keep learning. Keep growing.
          </p>

        </div>

        <section className="dashboard-section">
          <StreakCard />
        </section>

        <section className="dashboard-section">
          <ProgressCard />
        </section>

        <section className="dashboard-section">
          <TaskCard />
        </section>

        <section className="dashboard-section">
          <AchievementCard />
        </section>

        <section className="dashboard-section">
          <AIStudyCoach />
        </section>

      </main>

      <BottomNav />
    </>
  );
}

export default Dashboard;