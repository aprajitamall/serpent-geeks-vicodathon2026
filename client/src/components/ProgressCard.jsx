function ProgressCard() {
  return (
    <div className="dashboard-card">

      <h3>📈 Challenge Progress</h3>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: "20%" }}
        ></div>

      </div>

      <p>12 of 60 Days Completed</p>

    </div>
  );
}

export default ProgressCard;