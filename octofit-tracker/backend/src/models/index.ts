import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'member' },
    fitnessLevel: { type: String, default: 'intermediate' },
    city: { type: String, default: 'Remote' },
  },
  { timestamps: true },
);

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    captain: { type: String, required: true },
    focus: { type: String, default: 'strength' },
    members: { type: [String], default: [] },
  },
  { timestamps: true },
);

const activitySchema = new Schema(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
    notes: { type: String, default: '' },
  },
  { timestamps: true },
);

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    difficulty: { type: String, default: 'beginner' },
    duration: { type: Number, default: 30 },
    focus: { type: String, default: 'full-body' },
  },
  { timestamps: true },
);

const leaderboardSchema = new Schema(
  {
    userId: { type: String, required: true },
    score: { type: Number, default: 0 },
    rank: { type: Number, default: 1 },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
export const Team = model('Team', teamSchema);
export const Activity = model('Activity', activitySchema);
export const Workout = model('Workout', workoutSchema);
export const LeaderboardEntry = model('LeaderboardEntry', leaderboardSchema);
