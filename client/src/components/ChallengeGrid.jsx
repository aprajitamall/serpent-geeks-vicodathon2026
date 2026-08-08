import { Link } from "react-router-dom";

function ChallengeGrid() {
  const days = Array.from({ length: 60 }, (_, index) => index + 1);

  return (
    <div className="challenge-grid">

      {days.map((day) => {

        const completed = day < 12;
        const current = day === 12;

        return (
          <Link
            to={`/day/${day}`}
            className={`day-card ${
              completed
                ? "completed"
                : current
                ? "current"
                : "locked"
            }`}
            key={day}
          >

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

            <small>Day {day}</small>

          </Link>
        );
      })}

    </div>
  );
}

export default ChallengeGrid;