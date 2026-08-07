function Stats() {
  return (
    <div className="dashboard-card">

      <h3>📊 Today's Progress</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: "40%" }}
        ></div>
      </div>

      <div className="stats-list">

        <div className="stats-row">
          <span>Tasks Completed</span>
          <strong>2 / 5</strong>
        </div>

        <div className="stats-row">
          <span>Hours Coded</span>
          <strong>3.5 hrs</strong>
        </div>

        <div className="stats-row">
          <span>GitHub Commits</span>
          <strong>4</strong>
        </div>

      </div>

    </div>
  );
}

export default Stats;