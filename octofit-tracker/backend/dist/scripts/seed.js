"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const models_1 = require("../models");
async function seedDatabase() {
    try {
        await (0, database_1.connectDatabase)();
        await models_1.User.deleteMany({});
        await models_1.Team.deleteMany({});
        await models_1.Activity.deleteMany({});
        await models_1.Workout.deleteMany({});
        await models_1.LeaderboardEntry.deleteMany({});
        await models_1.User.create({ name: 'Ava', email: 'ava@example.com', role: 'captain' });
        await models_1.Team.create({ name: 'Storm Riders', captain: 'Ava' });
        await models_1.Activity.create({ userId: 'ava', type: 'run', duration: 30 });
        await models_1.Workout.create({ title: 'Core Blast', difficulty: 'intermediate' });
        await models_1.LeaderboardEntry.create({ userId: 'ava', score: 120 });
        console.log('Database seeding complete');
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
