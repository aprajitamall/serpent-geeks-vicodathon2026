import Navbar from "../components/Navbar";
import StreakCard from "../components/StreakCard";
import Stats from "../components/Stats";
import ProgressCard from "../components/ProgressCard";
import TaskCard from "../components/TaskCard";
import AchievementCard from "../components/AchievementCard";
import AIStudyCoach from "../components/AIStudyCoach";
import BottomNav from "../components/BottomNav";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main>

        <section className="dashboard-header">
          <h1>Welcome Back 👋</h1>
          <p>Keep your streak alive today.</p>
        </section>

        <section className="dashboard-section">
          <StreakCard />
        </section>

        <section className="dashboard-section">
          <ProgressCard />
        </section>
        

<section className="dashboard-section">
    <Stats />
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