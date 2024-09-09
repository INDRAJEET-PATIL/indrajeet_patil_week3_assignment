import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ActivityLog = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from local storage
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Activity Log</Typography>
      <List>
        {activities.length ? (
          activities.map((activity, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${activity.date} - ${activity.activity}`}
                secondary={`Duration: ${activity.duration} minutes | Calories: ${activity.calories}`}
              />
            </ListItem>
          ))
        ) : (
          <Typography>No activities logged yet.</Typography>
        )}
      </List>
    </Container>
  );
};

export default ActivityLog;
