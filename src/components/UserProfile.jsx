import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    bodyFat: '',
    muscleMass: '',
    bloodGroup: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
    setProfile(storedProfile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const calculateBMI = () => {
    const heightInMeters = profile.height / 100;
    return (profile.weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const handleSave = () => {
    setLoading(true);
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setTimeout(() => {
      setLoading(false);
      alert('Profile updated successfully!');
    }, 1000);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User Profile</Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={profile.name}
          onChange={handleChange}
        />
        <TextField
          label="Age"
          name="age"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={profile.age}
          onChange={handleChange}
        />
        <TextField
          label="Height (cm)"
          name="height"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={profile.height}
          onChange={handleChange}
        />
        <TextField
          label="Weight (kg)"
          name="weight"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={profile.weight}
          onChange={handleChange}
        />
        <TextField
          label="Body Fat (%)"
          name="bodyFat"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={profile.bodyFat}
          onChange={handleChange}
        />
        <TextField
          label="Muscle Mass (%)"
          name="muscleMass"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={profile.muscleMass}
          onChange={handleChange}
        />
        <TextField
          label="Blood Group"
          name="bloodGroup"
          variant="outlined"
          fullWidth
          margin="normal"
          value={profile.bloodGroup}
          onChange={handleChange}
        />
        <Typography variant="h6" gutterBottom>
          BMI: {profile.height && profile.weight ? calculateBMI() : 'N/A'}
        </Typography>
        <Box mt={2}>
          <Button 
            onClick={handleSave} 
            variant="contained" 
            color="primary" 
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Save Profile'}
          </Button>
        </Box>
      </form>
      <Button onClick={() => navigate('/dashboard')} variant="text" color="secondary">
        Back to Dashboard
      </Button>
    </Container>
  );
}

export default UserProfile;