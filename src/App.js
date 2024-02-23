import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import AccountDetails from './AccountDetails';
import TransactionList from './TransactionList';
// Import new components here
import HomePage from './components/HomePage';
import CreateAccountPage from './components/CreateAccountPage';
import DepositPage from './components/DepositPage';
import WithdrawPage from './components/WithdrawPage';
import AllDataPage from './components/AllDataPage';
import './App.css';



function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Navigation Links */}
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/create-account">Create Account</NavLink>
          <NavLink className="nav-link" to="/deposit">Deposit</NavLink>
          <NavLink className="nav-link" to="/withdraw">Withdraw</NavLink>
          <NavLink className="nav-link" to="/all-data">All Data</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/all-data" element={<AllDataPage />} />
        {/* Existing Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/account" element={<AccountDetails />} />
        <Route path="/transactions" element={<TransactionList />} />
      </Routes>
    </Router>
  );
}

export default App;
