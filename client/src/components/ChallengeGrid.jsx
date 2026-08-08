import { Link } from "react-router-dom";

function ChallengeGrid() {
  const days = Array.from({ length: 60 }, (_, index) => index + 1);

  return (
    <div className="challenge-grid">

      {days.map((day) => {

        const completed = day < 18;
        const current = day === 18;
        const locked = day > 18;

        const content = (
          <>
            <span className="day-number">
              {day}
            </span>

            <span className="day-status">
              {completed
                ? "✓"
                : current
                ? "🔥"
                : "🔒"}
            </span>

            <small>
              Day {day}
            </small>
          </>
        );

        if (locked) {
          return (
            <div
              className="day-card locked"
              key={day}
            >
              {content}
            </div>
          );
        }

        return (
          <Link
            to={`/day/${day}`}
            className={`day-card ${
              completed
                ? "completed"
                : "current"
            }`}
            key={day}
          >
            {content}
          </Link>
        );
      })}

    </div>
  );
}

export default ChallengeGrid;