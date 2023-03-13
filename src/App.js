import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
      <Link to="/greeting">View Greetings</Link>
    </div>
  );
}

export default App;
