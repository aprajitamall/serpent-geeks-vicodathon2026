import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Challenge from "./pages/Challenge";
import ChallengeDay from "./pages/ChallengeDay";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/challenge"
          element={<Challenge />}
        />

        <Route
          path="/day/:day"
          element={<ChallengeDay />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;