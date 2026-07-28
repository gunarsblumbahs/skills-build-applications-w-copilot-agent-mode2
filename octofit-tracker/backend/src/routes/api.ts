import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

const router = Router();

router.get(['/users', '/users/'], async (_req, res) => {
  try {
    const users = await User.find({}).lean();
    res.json(users);
  } catch (error) {
    res.json([]);
  }
});

router.get(['/teams', '/teams/'], async (_req, res) => {
  try {
    const teams = await Team.find({}).lean();
    res.json(teams);
  } catch (error) {
    res.json([]);
  }
});

router.get(['/activities', '/activities/'], async (_req, res) => {
  try {
    const activities = await Activity.find({}).lean();
    res.json(activities);
  } catch (error) {
    res.json([]);
  }
});

router.get(['/leaderboard', '/leaderboard/'], async (_req, res) => {
  try {
    const leaderboard = await LeaderboardEntry.find({}).lean();
    res.json(leaderboard);
  } catch (error) {
    res.json([]);
  }
});

router.get(['/workouts', '/workouts/'], async (_req, res) => {
  try {
    const workouts = await Workout.find({}).lean();
    res.json(workouts);
  } catch (error) {
    res.json([]);
  }
});

export default router;
