import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { calculateCalories } from '../utils/calculateCalories';

function EditActivity() {
  const { index } = useParams();
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const activities = JSON.parse(localStorage.getItem('activities')) || [];
      if (activities[index]) {
        setActivity(activities[index].activity);
        setDuration(activities[index].duration);
        setCalories(activities[index].calories);
        setLoading(false);
      } else {
        // Redirect to activity log if index is invalid
        navigate('/activity-log');
      }
    } catch (err) {
      setError('Failed to load activity data.');
      setLoading(false);
    }
  }, [index, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!activity || duration <= 0) {
      alert('Please provide valid activity and duration.');
      return;
    }

    try {
      const activities = JSON.parse(localStorage.getItem('activities')) || [];
      const updatedActivity = {
        date: activities[index].date, // Keep the original date
        activity,
        duration,
        calories: calculateCalories(activity, duration),
      };

      activities[index] = updatedActivity;
      localStorage.setItem('activities', JSON.stringify(activities));
      navigate('/activity-log');
    } catch (err) {
      setError('Failed to update activity.');
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>Edit Activity</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Activity"
          variant="outlined"
          fullWidth
          margin="normal"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <TextField
          label="Duration (minutes)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
            setCalories(calculateCalories(activity, e.target.value));
          }}
          inputProps={{ min: 0 }}
        />
        <Typography variant="h6" gutterBottom>
          Estimated Calories: {calories}
        </Typography>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Update Activity
        </Button>
      </Box>
    </Container>
  );
}

export default EditActivity;
