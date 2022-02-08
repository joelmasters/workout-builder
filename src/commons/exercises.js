const chestExercises = {
  'Burpees' : {
    name: 'Burpees',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Chest',
  },
  'Diamond Push Ups' : {
    name: 'Diamond Push Ups',
    time: 2,
    num: 20,
    unit: 'Reps',
    category: 'Chest',
  },
  'Dips': {
    name: 'Dips',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Chest',
  },
  'Plank Builds' : {
    name: 'Plank Builds',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Chest',
  },
  'Push Ups' : {
    name: 'Push Ups',
    time: 2,
    num: 20,
    unit: 'Reps',
    category: 'Chest',
  },
  'Wide-Grip Push Ups' : {
    name: 'Wide-Grip Push Ups',
    time: 2,
    num: 20,
    unit: 'Reps',
    category: 'Chest',
  }
};

const legsExercises = {
  'Jump Lunges' : {
    name: 'Jump Lunges',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Legs',
  },
  'Jump Squats' : {
    name: 'Jump Squats',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Legs',
  },
  'Lunges' : {
    name: 'Lunges',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Legs',
  },
  'Reverse Lunges' : {
    name: 'Reverse Lunges',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Legs',
  },
  'Squats' : {
    name: 'Squats',
    time: 2,
    num: 20,
    unit: 'Reps',
    category: 'Legs',
  },
  'Prisoner Squats' : {
    name: 'Prisoner Squats',
    time: 2,
    num: 20,
    unit: 'Reps',
    category: 'Legs',
  },
  'Tuck Jump Burpees' : {
    name: 'Tuck Jump Burpees',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Legs',
  }
};

const coreExercises = {
  'Crunches' : {
    name: 'Crunches',
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Core',
  },
  'Flutter Kicks' : {
    name: 'Flutter Kicks',
    time: 1,
    num: 20,
    unit: 'Reps',
    category: 'Core',
  },
  'Leg Raises' : {
    name: 'Leg Raises',
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Core',
  },
  'Mountain Climbers' : {
    name: 'Mountain Climbers',
    time: 1,
    num: 20,
    unit: 'Reps',
    category: 'Core',
  },
  'Plank' : {
    name: 'Plank',
    time: 1,
    num: 1,
    unit: 'Minutes',
    category: 'Core',
  },
  'Russian Twist' : {
    name: 'Russian Twist',
    time: 1,
    num: 20,
    unit: 'Reps',
    category: 'Core',
  },
  'Scissor Kicks' : {
    name: 'Scissor Kicks',
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Core',
  },
  'Side Plank' : {
    name: 'Side Plank',
    time: 1,
    num: 1,
    unit: 'Minutes',
    category: 'Core',
  },
  'Sit Ups' : {
    name: 'Sit Ups',
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Core',
  },
  'Suitcases' : {
    name: 'Suitcases',
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Core',
  },
  'Terminators' : {
    name: 'Terminators',
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Core',
  },
  'Toes to Bar' : {
    name: 'Toes to Bar',
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Core',
  },
};

const backExercises = {
  'Chin Ups' : {
    name: 'Chin Ups',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Back',
  },
  'Inverted Rows' : {
    name: 'Inverted Rows',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Back',
  },
  'Pull Ups' : {
    name: 'Pull Ups',
    time: 2,
    num: 10,
    unit: 'Reps',
    category: 'Back',
  },
  'Supermans' : {
    name: 'Supermans',
    time: 2,
    num: 20,
    unit: 'Reps',
    category: 'Back',
  },
};

const cardioExercises = {
  'Hill Climb' : {
    name: 'Hill Climb',
    time: 20,
    num: 1,
    unit: 'Reps',
    category: 'Cardio',
  },
  'Jumping Jacks' : {
    name: 'Jumping Jacks',
    time: 10,
    num: 20,
    unit: 'Reps',
    category: 'Cardio',
  },
  'Seal Jacks' : {
    name: 'Seal Jacks',
    time: 10,
    num: 20,
    unit: 'Reps',
    category: 'Cardio',
  },
  'Lap' : {
    name: 'Lap',
    time: 8,
    num: 1,
    unit: 'Laps',
    category: 'Cardio',
  },
  'Mile' : {
    name: 'Mile',
    time: 10,
    num: 1,
    unit: 'Reps',
    category: 'Cardio',
  },
  'Sprint' : {
    name: 'Sprint',
    time: 2,
    num: 5,
    unit: 'Seconds',
    category: 'Cardio',
  },
  'Run' : {
    name: 'Run',
    time: 2,
    num: 'N/a',
    unit: 'Seconds',
    category: 'Cardio',
  },
};

const warmups = {
  'Butt Kickers' : {
    name: 'Butt Kickers',
    time: 1,
    num: 'N/a',
    unit: 'Reps',
    category: 'Warmup',
  },
  'Free Stretch' : {
    name: 'Free Stretch',
    time: 1,
    num: 1,
    unit: 'Minutes',
    category: 'Warmup',
  },
  'High Knees' : {
    name: 'High Knees',
    time: 1,
    num: 'N/a',
    unit: 'Reps',
    category: 'Warmup',
  },
  'Inchworm' : {
    name: 'Inchworm',
    time: 1,
    num: 5,
    unit: 'Reps',
    category: 'Warmup',
  },
  'Karaoke' : {
    name: 'Karaoke',
    time: 1,
    num: 'N/a',
    unit: 'Reps',
    category: 'Warmup',
  },
  'Lunge and Twist' : {
    name: 'Lunge and Twist',
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Warmup',
  },
  'Russian March' : {
    name: 'Russian March',
    time: 1,
    num: 'N/a',
    unit: 'Reps',
    category: 'Warmup',
  },
  'Super Marios' : {
    name: 'Super Marios',
    time: 1,
    num: 'N/a',
    unit: 'Reps',
    category: 'Warmup',
  },
  "World's Greatest Stretch" : {
    name: `World's Greatest Stretch`,
    time: 1,
    num: 10,
    unit: 'Reps',
    category: 'Warmup',
  },
  'Jog' : {
    name: 'Jog',
    time: 1,
    num: 'N/a',
    unit: 'Laps',
    category: 'Warmup',
  },
};

const breaks = {
  'Break' : {
    name: 'Break',
    time: 1,
    num: 1,
    unit: 'Minutes',
    category: 'Break',
  },
  'CoT' : {
    name: 'CoT',
    time: 1,
    num: 'N/a',
    unit: 'N/a',
    category: 'Break',
  },
  'Repeat' : {
    name: 'Repeat',
    time: 1,
    num: 3,
    unit: 'Times',
    category: 'Break',
  },
  'Rest' : {
    name: 'Rest',
    time: 1,
    num: 1,
    unit: 'Minutes',
    category: 'Break',
  },
};

module.exports = {
  chestExercises,
  legsExercises,
  coreExercises,
  backExercises,
  cardioExercises,
  warmups,
  breaks
}