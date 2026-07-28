import { connectDatabase } from '../config/database';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase(): Promise<void> {
  try {
    await connectDatabase();

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Workout.deleteMany({});
    await LeaderboardEntry.deleteMany({});

    const users = await User.insertMany([
      {
        name: 'Ava Patel',
        email: 'ava.patel@example.com',
        role: 'captain',
        fitnessLevel: 'advanced',
        city: 'Seattle',
      },
      {
        name: 'Marcus Lee',
        email: 'marcus.lee@example.com',
        role: 'member',
        fitnessLevel: 'intermediate',
        city: 'Austin',
      },
      {
        name: 'Nia Brooks',
        email: 'nia.brooks@example.com',
        role: 'member',
        fitnessLevel: 'beginner',
        city: 'Denver',
      },
    ]);

    await Team.insertMany([
      {
        name: 'Storm Riders',
        captain: users[0].name,
        focus: 'endurance',
        members: users.map((user) => user.name),
      },
      {
        name: 'Peak Performers',
        captain: users[1].name,
        focus: 'strength',
        members: [users[1].name, users[2].name],
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id.toString(),
        type: 'run',
        duration: 45,
        notes: 'Morning 5K',
      },
      {
        userId: users[1]._id.toString(),
        type: 'strength',
        duration: 60,
        notes: 'Upper body session',
      },
      {
        userId: users[2]._id.toString(),
        type: 'yoga',
        duration: 30,
        notes: 'Recovery flow',
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Core Blast',
        difficulty: 'intermediate',
        duration: 35,
        focus: 'core',
      },
      {
        title: 'Hill Intervals',
        difficulty: 'advanced',
        duration: 40,
        focus: 'cardio',
      },
      {
        title: 'Mobility Reset',
        difficulty: 'beginner',
        duration: 20,
        focus: 'mobility',
      },
    ]);

    await LeaderboardEntry.insertMany([
      { userId: users[0]._id.toString(), score: 980, rank: 1 },
      { userId: users[1]._id.toString(), score: 842, rank: 2 },
      { userId: users[2]._id.toString(), score: 710, rank: 3 },
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
