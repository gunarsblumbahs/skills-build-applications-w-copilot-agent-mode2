import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'member' },
  },
  { timestamps: true },
);

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    captain: { type: String, required: true },
  },
  { timestamps: true },
);

const activitySchema = new Schema(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    difficulty: { type: String, default: 'beginner' },
  },
  { timestamps: true },
);

const leaderboardSchema = new Schema(
  {
    userId: { type: String, required: true },
    score: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
export const Team = model('Team', teamSchema);
export const Activity = model('Activity', activitySchema);
export const Workout = model('Workout', workoutSchema);
export const LeaderboardEntry = model('LeaderboardEntry', leaderboardSchema);
