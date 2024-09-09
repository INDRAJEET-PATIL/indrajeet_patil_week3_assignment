// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AddActivityForm from './AddActivityForm'; // Ensure this path is correct

const Dashboard = ({ onLogout }) => {
  const [showAddActivity, setShowAddActivity] = useState(false);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Box mt={2}>
        <Button
          component={Link}
          to="/activity-log"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          View Activity Log
        </Button>
        <Button
          component={Link}
          to="/profile"
          variant="contained"
          color="secondary"
        >
          Edit Profile
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowAddActivity(!showAddActivity)}
        >
          {showAddActivity ? 'Hide Add Activity' : 'Add Activity'}
        </Button>
        {showAddActivity && <AddActivityForm />} {/* Ensure this component exists */}
      </Box>
      <Box mt={4}>
        <Button
          onClick={onLogout}
          variant="contained"
          color="error"
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;