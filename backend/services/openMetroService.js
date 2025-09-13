import axios from 'axios';

export const fetchClimateData = async (lat, lon) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

  const { data } = await axios.get(url);
  return data;
};