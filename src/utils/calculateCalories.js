export function calculateCalories(activity, duration) {
    const activityCaloriesPerMinute = {
      Running: 10,
      Cycling: 8,
      Swimming: 9,
      Walking: 4,
      Yoga: 3,
      'Strength Training': 6,
      Hiking: 7,
      'Jump Rope': 12,
      Rowing: 8,
      Pilates: 5,
    };
  
    const caloriesPerMinute = activityCaloriesPerMinute[activity] || 0;
    const durationNumber = parseFloat(duration);
  
    if (isNaN(durationNumber) || durationNumber <= 0) {
      return 'Invalid duration';
    }
  
    return (caloriesPerMinute * durationNumber).toFixed(2);
  }
  