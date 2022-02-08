import {
  chestExercises,
  legsExercises,
  coreExercises,
  backExercises,
  cardioExercises,
  warmups,
  breaks
} from './exercises.js';
import locations from './locations.js';

const workoutTemplates = {
  "The Gauntlet" : {
    name: 'The Gauntlet',
    location: {
      name: 'Golden Valley High School',
      address: '27051 Robert C. Lee Pkwy, Santa Clarita, CA 91350',
    },
    description: "The Guantlet will blast your legs, cardio, and ego.",
    exercises: [
      warmups['Jog'],
      warmups['High Knees'],
      warmups['Butt Kickers'],
      warmups['Lunge and Twist'],
      warmups['Inchworm'],
      warmups["World's Greatest Stretch"],
      breaks['Rest'],
      cardioExercises['Hill Climb'],
      chestExercises['Burpees'],
      cardioExercises['Run'],
      coreExercises['Mountain Climbers'],
      cardioExercises['Run'],
      chestExercises['Push Ups'],
      warmups['Jog'],
      breaks['Rest'],
      cardioExercises['Hill Climb'],
      chestExercises['Burpees'],
      cardioExercises['Run'],
      coreExercises['Flutter Kicks'],
      cardioExercises['Run'],
      chestExercises['Push Ups'],
      warmups['Jog'],
      breaks['Rest'],
      cardioExercises['Hill Climb'],
      chestExercises['Burpees'],
      cardioExercises['Run'],
      coreExercises['Plank'],
      cardioExercises['Run'],
      chestExercises['Push Ups'],
      warmups['Jog'],
      breaks['Rest'],
      cardioExercises['Hill Climb'],
      chestExercises['Burpees'],
      cardioExercises['Run'],
      legsExercises['Jump Squats'],
      cardioExercises['Run'],
      chestExercises['Push Ups'],
      warmups['Jog'],
      breaks['Rest'],
      cardioExercises['Hill Climb'],
      chestExercises['Burpees'],
      cardioExercises['Run'],
      legsExercises['Lunges'],
      cardioExercises['Run'],
      chestExercises['Push Ups'],
      warmups['Jog'],
      breaks['Rest'],
      breaks['CoT']
    ]
  },
  "Murph" : {
    name: 'Murph Challenge',
    location: {
      name: 'Central Park',
      address: '27150 Bouquet Canyon Road Santa Clarita, CA 91350',
    },
    description: "Murph Challenge.",
    exercises: [
      warmups['Jog'],
      warmups['High Knees'],
      warmups['Butt Kickers'],
      warmups['Lunge and Twist'],
      warmups['Inchworm'],
      warmups["World's Greatest Stretch"],
      breaks['Rest'],
      cardioExercises['Mile'],
      {...backExercises['Pull Ups'], num: 100},
      {...chestExercises['Push Ups'], num: 200},
      {...legsExercises['Squats'], num: 300}, 
      cardioExercises['Mile'],
      breaks['CoT']
    ]
  },
  "Superman Workout" : {
    name: 'Superman Workout',
    location: {
      name: 'West Creek Park',
      address: '4247 Village Circle, Santa Clarita, California 91354',
    },
    description: "1000 Rep HIIT Workout",
    exercises: [
      warmups['Jog'],
      warmups['High Knees'],
      warmups['Butt Kickers'],
      warmups['Lunge and Twist'],
      warmups['Inchworm'],
      warmups["World's Greatest Stretch"],
      breaks['Rest'],
      {...legsExercises['Tuck Jump Burpees'], num: 10},
      {...chestExercises['Diamond Push Ups'], num: 10},
      {...legsExercises['Reverse Lunges'], num: 10},
      {...coreExercises['Leg Raises'], num: 10},
      {...cardioExercises['Seal Jacks'], num: 10},
      {...backExercises['Supermans'], num: 10},
      {...coreExercises['Mountain Climbers'], num: 10},
      {...legsExercises['Prisoner Squats'], num: 10},
      {...chestExercises['Plank Builds'], num: 10},
      {...coreExercises['Terminators'], num: 10},
      breaks['Rest'],
      {...breaks['Repeat'], num: 10},
      breaks['CoT']
    ]
  }
}

/*'Squats' : {
  name: 'Squats',
  time: 2,
  num: 20,
  unit: 'Reps',
  category: 'Legs',
}*/

export default workoutTemplates;