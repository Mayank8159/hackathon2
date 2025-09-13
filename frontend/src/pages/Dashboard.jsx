import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import ChartPanel from "../components/ChartPanel";
import TimeSlider from "../components/TimeSlider";

export default function Dashboard() {
  const [climateData, setClimateData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://hackathon2-2-2zka.onrender.com/api/climate?lat=22.5726&lon=88.3639"
      )
      .then((res) => setClimateData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!climateData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900 text-white">
        <div className="text-center space-y-4 animate-pulse">
          <p className="text-xl font-semibold">🔄 Loading climate data...</p>
          <p className="text-sm text-white/70">
            Please wait while we fetch real-time insights
          </p>
        </div>
      </div>
    );
  }

  const { time, temperature, humidity, windSpeed } = climateData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10 mt-15">
        <Header />

        <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-6 ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20">
          <ChartPanel
            time={time}
            temperature={temperature}
            humidity={humidity}
            windSpeed={windSpeed}
            currentIndex={currentIndex}
          />
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-6 ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20">
          <TimeSlider
            time={time}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </div>
  );
}
