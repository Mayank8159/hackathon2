import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartPanel({ time, temperature, humidity, windSpeed, currentIndex }) {
  const labels = time.map((t) => new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: 'Temperature (°C)',
              data: temperature,
              borderColor: '#f97316',
              backgroundColor: 'rgba(249, 115, 22, 0.2)',
            },
          ],
        }}
        options={chartOptions}
      />
      <Line
        data={{
          labels,
          datasets: [
            {
              label: 'Humidity (%)',
              data: humidity,
              borderColor: '#0ea5e9',
              backgroundColor: 'rgba(14, 165, 233, 0.2)',
            },
          ],
        }}
        options={chartOptions}
      />
      <Line
        data={{
          labels,
          datasets: [
            {
              label: 'Wind Speed (m/s)',
              data: windSpeed,
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
            },
          ],
        }}
        options={chartOptions}
      />
    </div>
  );
}