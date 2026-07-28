"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardEntry = exports.Workout = exports.Activity = exports.Team = exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'member' },
    fitnessLevel: { type: String, default: 'intermediate' },
    city: { type: String, default: 'Remote' },
}, { timestamps: true });
const teamSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    captain: { type: String, required: true },
    focus: { type: String, default: 'strength' },
    members: { type: [String], default: [] },
}, { timestamps: true });
const activitySchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
    notes: { type: String, default: '' },
}, { timestamps: true });
const workoutSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    difficulty: { type: String, default: 'beginner' },
    duration: { type: Number, default: 30 },
    focus: { type: String, default: 'full-body' },
}, { timestamps: true });
const leaderboardSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    score: { type: Number, default: 0 },
    rank: { type: Number, default: 1 },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('User', userSchema);
exports.Team = (0, mongoose_1.model)('Team', teamSchema);
exports.Activity = (0, mongoose_1.model)('Activity', activitySchema);
exports.Workout = (0, mongoose_1.model)('Workout', workoutSchema);
exports.LeaderboardEntry = (0, mongoose_1.model)('LeaderboardEntry', leaderboardSchema);
