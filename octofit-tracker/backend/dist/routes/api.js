"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get(['/users', '/users/'], async (_req, res) => {
    try {
        const users = await models_1.User.find({}).lean();
        res.json(users);
    }
    catch (error) {
        res.json([]);
    }
});
router.get(['/teams', '/teams/'], async (_req, res) => {
    try {
        const teams = await models_1.Team.find({}).lean();
        res.json(teams);
    }
    catch (error) {
        res.json([]);
    }
});
router.get(['/activities', '/activities/'], async (_req, res) => {
    try {
        const activities = await models_1.Activity.find({}).lean();
        res.json(activities);
    }
    catch (error) {
        res.json([]);
    }
});
router.get(['/leaderboard', '/leaderboard/'], async (_req, res) => {
    try {
        const leaderboard = await models_1.LeaderboardEntry.find({}).lean();
        res.json(leaderboard);
    }
    catch (error) {
        res.json([]);
    }
});
router.get(['/workouts', '/workouts/'], async (_req, res) => {
    try {
        const workouts = await models_1.Workout.find({}).lean();
        res.json(workouts);
    }
    catch (error) {
        res.json([]);
    }
});
exports.default = router;
