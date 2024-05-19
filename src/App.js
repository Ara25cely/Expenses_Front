import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import AddUser from './views/AddUser'
import Balance from './views/Balance'
import ExpenseBlance from './views/ExpenseBalance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add_user" exact element={<AddUser />} />
        <Route path="/balance" exact element={<Balance />} />
        <Route path="/expense_balance" exact element={<ExpenseBlance />} />
      </Routes>
    </Router>
  );
}

export default App;