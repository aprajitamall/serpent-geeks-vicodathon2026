function AchievementCard() {
  return (
    <div className="dashboard-card achievement-card">

      <div className="card-top">
        <span className="card-icon">🏆</span>
        <span className="card-label">Achievements</span>
      </div>

      <div className="achievement-list">

        <div className="achievement-item">
          <span className="achievement-icon">🥇</span>
          <div>
            <h3>First Commit</h3>
            <p>Completed your first GitHub commit.</p>
          </div>
        </div>

        <div className="achievement-item">
          <span className="achievement-icon">🔥</span>
          <div>
            <h3>7-Day Streak</h3>
            <p>Coded consistently for 7 days.</p>
          </div>
        </div>

        <div className="achievement-item">
          <span className="achievement-icon">🚀</span>
          <div>
            <h3>Top 25%</h3>
            <p>You are among the most consistent learners.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AchievementCard;