import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { calculateCalories } from '../utils/calculateCalories';

const activitiesList = [
  'Running',
  'Cycling',
  'Swimming',
  'Walking',
  'Yoga',
  'Strength Training',
  'Hiking',
  'Jump Rope',
  'Rowing',
  'Pilates',
];

const AddActivityForm = () => {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleActivityChange = (event) => {
    const activity = event.target.value;
    setSelectedActivity(activity);
    updateCalories(activity, duration);
  };

  const handleDurationChange = (event) => {
    const durationValue = event.target.value;
    setDuration(durationValue);
    updateCalories(selectedActivity, durationValue);
  };

  const updateCalories = (activity, duration) => {
    const calculatedCalories = calculateCalories(activity, duration);
    setCalories(calculatedCalories);
  };

  const handleAddActivity = () => {
    if (!selectedActivity || !duration) {
      alert('Please select an activity and enter a duration.');
      return;
    }

    // Add the activity to local storage
    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    const newActivity = {
      date: new Date().toISOString().split('T')[0], // Current date
      activity: selectedActivity,
      duration,
      calories,
    };
    activities.push(newActivity);
    localStorage.setItem('activities', JSON.stringify(activities));

    // Reset the form
    setSelectedActivity('');
    setDuration('');
    setCalories('');
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Activity</InputLabel>
        <Select
          value={selectedActivity}
          onChange={handleActivityChange}
          label="Activity"
        >
          {activitiesList.map((activity, index) => (
            <MenuItem key={index} value={activity}>
              {activity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Duration (minutes)"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={duration}
        onChange={handleDurationChange}
        inputProps={{ min: 0 }}
      />
      <Typography variant="h6" gutterBottom>
        Estimated Calories: {calories}
      </Typography>
      <Button onClick={handleAddActivity} variant="contained" color="primary">
        Add Activity
      </Button>
    </Box>
  );
};

export default AddActivityForm;
