import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    bodyFat: '',
    muscleMass: '',
    bloodGroup: '',
    bmi: null,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const calculateBMI = () => {
    const { height, weight } = profile;
    const heightInMeters = height / 100;
    
    if (heightInMeters <= 0 || weight <= 0) {
      setError('Height and weight must be positive numbers.');
      return;
    }

    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setProfile({ ...profile, bmi });
    setError('');
  };

  return (
    <Container>
      <Box component="form" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Profile Information
        </Typography>
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
          fullWidth
          margin="normal"
          value={profile.age}
          onChange={handleChange}
          type="number"
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Height (cm)"
          name="height"
          variant="outlined"
          fullWidth
          margin="normal"
          value={profile.height}
          onChange={handleChange}
          type="number"
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Weight (kg)"
          name="weight"
          variant="outlined"
          fullWidth
          margin="normal"
          value={profile.weight}
          onChange={handleChange}
          type="number"
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Body Fat (%)"
          name="bodyFat"
          variant="outlined"
          fullWidth
          margin="normal"
          value={profile.bodyFat}
          onChange={handleChange}
          type="number"
          inputProps={{ min: 0, max: 100 }}
        />
        <TextField
          label="Muscle Mass (%)"
          name="muscleMass"
          variant="outlined"
          fullWidth
          margin="normal"
          value={profile.muscleMass}
          onChange={handleChange}
          type="number"
          inputProps={{ min: 0, max: 100 }}
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
        <Button onClick={calculateBMI} variant="contained" color="primary" sx={{ mt: 2 }}>
          Calculate BMI
        </Button>
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
        {profile.bmi && <Typography variant="h6" sx={{ mt: 2 }}>BMI: {profile.bmi}</Typography>}
      </Box>
    </Container>
  );
}

export default ProfilePage;