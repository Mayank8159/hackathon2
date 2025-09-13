import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoutes from './routes/climateRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Backend is alive');
});

app.use('/api', contactRoutes);
app.use('/api', weatherRoutes);

export default app;