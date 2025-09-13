import { fetchClimateData } from '../services/openMetroService.js';

export const getClimate = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    const rawData = await fetchClimateData(lat, lon);

    // Optional: Shape the response for charting
    const structuredData = {
      time: rawData.hourly.time,
      temperature: rawData.hourly.temperature_2m,
      humidity: rawData.hourly.relative_humidity_2m,
      windSpeed: rawData.hourly.wind_speed_10m,
    };

    res.status(200).json(structuredData);
  } catch (err) {
    console.error('Climate fetch error:', err.message);
    res.status(500).json({ error: 'Failed to fetch climate data.' });
  }
};