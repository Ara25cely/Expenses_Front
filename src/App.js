import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import AddUser from './views/AddUser'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add_user" exact element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;