import { useState } from "react";

function AIStudyCoach() {
  const [showAdvice, setShowAdvice] = useState(false);

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
        💡
        <span>
          Try breaking today's task into smaller components
          before you start coding.
        </span>
      </div>

      <button
        className="primary-btn"
        onClick={() => setShowAdvice(!showAdvice)}
      >
        {showAdvice ? "Hide Guidance ↑" : "Ask AI Coach →"}
      </button>

      {showAdvice && (
        <div className="coach-response">

          <h3>🤖 Here's your plan:</h3>

          <div className="coach-step">
            <span>1</span>
            <p>Break today's task into smaller components.</p>
          </div>

          <div className="coach-step">
            <span>2</span>
            <p>Build the basic structure before styling it.</p>
          </div>

          <div className="coach-step">
            <span>3</span>
            <p>Test your component on different screen sizes.</p>
          </div>

          <div className="coach-step">
            <span>4</span>
            <p>Push your completed work to GitHub.</p>
          </div>

          <div className="coach-tip">
            💡 <strong>Coach Tip:</strong> Don't try to perfect
            everything at once. Build, test, and improve step by step.
          </div>

        </div>
      )}

    </div>
  );
}

export default AIStudyCoach;