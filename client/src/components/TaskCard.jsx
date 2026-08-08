function TaskCard() {
  return (
    <div className="dashboard-card task-card">

      <div className="card-top">
        <span className="card-icon">📅</span>
        <span className="card-label">Today's Task</span>
      </div>

      <h2>Build a Responsive React Component</h2>

      <p>
        Create a reusable React component and make sure it
        works properly on mobile and desktop screens.
      </p>

      <div className="task-info">
        <span>⏱️ 45 min</span>
        <span>⭐ Intermediate</span>
      </div>

      <button className="primary-btn">
        Start Task →
      </button>

    </div>
  );
}

export default TaskCard;