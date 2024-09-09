import React, { useState } from 'react';
import ActivityHistory from './ActivityHistory';

const ActivityLog = () => {
  const [activities, setActivities] = useState([
    // Example activities
    { date: '2024-09-01', activity: 'Running', duration: 30, calories: 300 },
    { date: '2024-09-02', activity: 'Cycling', duration: 45, calories: 360 },
  ]);

  return (
    <div>
      <h2>Activity Log</h2>
      <ActivityHistory activities={activities} />
    </div>
  );
};

export default ActivityLog;
