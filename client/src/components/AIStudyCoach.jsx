function AIStudyCoach() {
  return (
    <div className="dashboard-card coach-card">

      <div className="card-top">
        <span className="card-icon">🤖</span>
        <span className="card-label">AI Study Coach</span>
      </div>

      <h2>Need help with today's challenge?</h2>

      <p>
        Get personalized guidance, coding tips, and suggestions
        to improve your learning journey.
      </p>

      <div className="coach-suggestion">
        💡 <span>
          Try breaking today's task into smaller components
          before you start coding.
        </span>
      </div>

      <button className="primary-btn">
        Ask AI Coach →
      </button>

    </div>
  );
}

export default AIStudyCoach;