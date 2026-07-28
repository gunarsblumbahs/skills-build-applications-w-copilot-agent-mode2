import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

app.get('/api', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API ready' });
});

async function startServer(): Promise<void> {
  await connectDatabase();
  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit backend listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error(error);
  process.exit(1);
});
