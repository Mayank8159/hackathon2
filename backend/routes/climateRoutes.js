import express from 'express';
import { getClimate } from '../controllers/climateController.js';

const router = express.Router();

router.get('/climate', getClimate);

export default router;