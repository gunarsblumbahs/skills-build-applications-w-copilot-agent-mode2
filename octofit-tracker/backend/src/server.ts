import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import apiRoutes from './routes/api';

dotenv.config();

export const app = express();
const port = Number(process.env.PORT || 8000);

const codespaceName = process.env.CODESPACE_NAME;
export const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend', baseUrl });
});

app.get('/api', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API ready', baseUrl });
});

app.use('/api', apiRoutes);

async function startServer(): Promise<void> {
  try {
    await connectDatabase();
  } catch (error) {
    console.warn('MongoDB unavailable; continuing without database connection.', error);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit backend listening on port ${port}`);
    console.log(`API base URL: ${baseUrl}`);
  });
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
