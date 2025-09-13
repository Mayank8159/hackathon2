import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartPanel({ time, temperature, humidity, windSpeed, currentIndex }) {
  const labels = time.map((t) =>
    new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      x: {
        ticks: { color: '#ccc' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
      y: {
        ticks: { color: '#ccc' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
    },
  };

  const chartStyle =
    'w-full md:w-[32%] min-w-[300px] h-[300px] p-2 bg-white/10 rounded-lg shadow-md ring-1 ring-white/10 hover:ring-white/20 transition-all';

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className={chartStyle}>
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
      </div>

      <div className={chartStyle}>
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
      </div>

      <div className={chartStyle}>
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
    </div>
  );
}