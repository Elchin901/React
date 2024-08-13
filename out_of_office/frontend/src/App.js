import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employees from './components/Employees';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/employees" element={<Employees />} />
          {/* Define routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;