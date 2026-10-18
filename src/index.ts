import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import electionData from './data/secunderabad_election_data_v2.json';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet()); 
app.use(cors());
app.use(express.json());

// 1. Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Political Intelligence API is running' });
});

// 2. Get Constituency Demographics & Profile
app.get('/api/constituency/profile', (req: Request, res: Response) => {
  res.status(200).json({
    constituency: electionData.constituency,
    assembly_segments: electionData.assembly_constituencies
  });
});

// 3. Get Historical Parliamentary Results (Now covers 5 elections: 2004-2024)
app.get('/api/elections/parliamentary', (req: Request, res: Response) => {
  res.status(200).json(electionData.historical_parliamentary_elections);
});

// 4. Get Historical Assembly Breakdowns (Now covers 3 elections: 2014, 2018, 2023)
app.get('/api/elections/assembly', (req: Request, res: Response) => {
  res.status(200).json(electionData.historical_assembly_elections);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 Try fetching data at http://localhost:${PORT}/api/elections/parliamentary`);
});