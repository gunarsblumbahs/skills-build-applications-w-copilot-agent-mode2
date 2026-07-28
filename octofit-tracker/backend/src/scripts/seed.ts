import { connectDatabase } from '../config/database';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

async function seedDatabase(): Promise<void> {
  try {
    await connectDatabase();

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Workout.deleteMany({});
    await LeaderboardEntry.deleteMany({});

    await User.create({ name: 'Ava', email: 'ava@example.com', role: 'captain' });
    await Team.create({ name: 'Storm Riders', captain: 'Ava' });
    await Activity.create({ userId: 'ava', type: 'run', duration: 30 });
    await Workout.create({ title: 'Core Blast', difficulty: 'intermediate' });
    await LeaderboardEntry.create({ userId: 'ava', score: 120 });

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
