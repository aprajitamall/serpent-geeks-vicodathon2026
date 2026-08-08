function ProgressCard() {
  return (
    <div className="dashboard-card progress-card">

      <div className="card-top">
        <span className="card-icon">📈</span>
        <span className="card-label">Challenge Progress</span>
      </div>

      <div className="progress-number">
        <strong>18</strong>
        <span>/ 60 Days</span>
      </div>

      <p>
        You have completed 18 days of your 60-day coding journey.
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: "30%" }}
        ></div>
      </div>

      <div className="progress-footer">
        <span>30% Complete</span>
        <span>42 Days Left</span>
      </div>

    </div>
  );
}

export default ProgressCard;