function StreakCard() {
  return (
    <div className="dashboard-card streak-card">

      <div className="card-top">
        <span className="card-icon">🔥</span>
        <span className="card-label">Current Streak</span>
      </div>

      <h1>12 Days</h1>

      <p>
        Keep going! You're building a strong coding habit.
      </p>

      <div className="streak-progress">
        <div className="streak-fill"></div>
      </div>

      <small>12 / 60 days completed</small>

    </div>
  );
}

export default StreakCard;