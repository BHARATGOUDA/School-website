import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Academics from './Components/Academics';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Facilities from './Components/Facilities';
import Admission from './Components/Admission';
import Login from './Components/Login';
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/facilities" element={<Facilities/>} />
          <Route path="/admission" element={<Admission/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
