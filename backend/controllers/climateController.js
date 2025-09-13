import { fetchClimateData } from '../services/openMeteoService.js';

export const getClimate = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ error: 'Missing coordinates' });

    const data = await fetchClimateData(lat, lon);
    res.json(data);
  } catch (err) {
    console.error('Climate fetch error:', err.message);
    res.status(500).json({ error: 'Failed to fetch climate data' });
  }
};