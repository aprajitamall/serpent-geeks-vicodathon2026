import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import ChallengeDay from "./pages/ChallengeDay";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          path="/day/12" 
          element={<ChallengeDay />} 
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

