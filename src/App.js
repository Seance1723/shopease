// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UserProfile from './pages/User/UserProfile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import LoginPage from './pages/Auth/LoginPage';
import Layout from './components/Layout/Layout';
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="auth/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
