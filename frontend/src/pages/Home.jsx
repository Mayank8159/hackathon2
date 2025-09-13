import { Link } from 'react-router-dom';
import { TreePalm, ShieldCheck, MapPinned } from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Trees Planted', value: '+120K', icon: <TreePalm size={32} className="text-green-700" /> },
    { label: 'Flood Risk Reduced', value: '85%', icon: <ShieldCheck size={32} className="text-blue-700" /> },
    { label: 'Cities Monitored', value: '30+', icon: <MapPinned size={32} className="text-purple-700" /> },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-teal-300  text-gray-900 flex flex-col justify-center items-center px-6 md:px-24 lg:px-32 xl:px-48 py-20">
      {/* Hero */}
      <div className="text-center max-w-3xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mt-25 mb-6">
          Climate Resilience Starts With You 🌱
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Discover risks, take action, and build a safer future with real-time insights and community-powered solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="bg-white text-teal-800 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition duration-300 shadow-md"
          >
            Explore Dashboard
          </Link>
          <Link
            to="/report"
            className="border border-teal-800 text-teal-800 px-6 py-3 rounded-full hover:bg-teal-800 hover:text-white transition duration-300 shadow-md"
          >
            Report Issue
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="w-16 h-1 bg-white/50 rounded-full my-12"></div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="mb-2 flex justify-center">{stat.icon}</div>
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}