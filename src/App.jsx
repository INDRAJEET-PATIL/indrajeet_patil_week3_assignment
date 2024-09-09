import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserProfile from './components/UserProfile';
import AccountSettings from './components/AccountSettings';
import EditActivity from './components/EditActivity';
import ActivityLog from './components/ActivityLog';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/signup"
            element={!isAuthenticated ? <SignupPage /> : <Dashboard />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <UserProfile /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/account-settings"
            element={isAuthenticated ? <AccountSettings /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/edit-activity/:index"
            element={isAuthenticated ? <EditActivity /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/activity-log"
            element={isAuthenticated ? <ActivityLog /> : <LoginPage onLogin={handleLogin} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
