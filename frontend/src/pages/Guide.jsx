import { useState } from "react";

const disasters = [
  {
    name: "Tsunami",
    overview:
      "Sudden sea waves caused by underwater earthquakes or volcanic eruptions.",
    dos: [
      "Move to higher ground",
      "Listen to official alerts",
      "Avoid beaches",
    ],
    donts: [
      "Don’t wait to see the wave",
      "Don’t go near the shore",
      "Don’t ignore warnings",
    ],
    helpline: "NDRF: 011-24363260, NDMA: 1078",
  },
  {
    name: "Earthquake",
    overview: "Sudden shaking of the ground due to tectonic movements.",
    dos: ["Drop, Cover, Hold", "Stay indoors if safe", "Check for gas leaks"],
    donts: [
      "Don’t use elevators",
      "Don’t run outside blindly",
      "Don’t light flames",
    ],
    helpline: "NDMA: 011-26701700, NDRF: 011-24363260",
  },
  {
    name: "Cyclone",
    overview: "Intense windstorm with heavy rain, often causing flooding.",
    dos: ["Secure windows", "Stock emergency supplies", "Evacuate if advised"],
    donts: [
      "Don’t drive through water",
      "Don’t ignore evacuation orders",
      "Don’t rely on rumors",
    ],
    helpline: "Disaster Helpline: 112, NDMA: 1078",
  },
  {
    name: "Flood",
    overview:
      "Overflow of water submerging land, often caused by heavy rains or dam failure.",
    dos: [
      "Move to higher ground",
      "Turn off electricity",
      "Keep emergency kit ready",
    ],
    donts: [
      "Don’t walk through moving water",
      "Don’t drink contaminated water",
      "Don’t panic",
    ],
    helpline: "Flood Helpline: 1070, NDRF: 9711077372",
  },
  {
    name: "Landslide",
    overview: "Sudden movement of rock, earth, or debris down a slope.",
    dos: [
      "Stay alert in hilly areas",
      "Evacuate if warned",
      "Avoid riverbanks",
    ],
    donts: [
      "Don’t build near steep slopes",
      "Don’t ignore cracks in walls",
      "Don’t drive during heavy rain",
    ],
    helpline: "NDMA: 1078, Local District Helpline",
  },
  {
    name: "Heatwave",
    overview:
      "Prolonged period of excessively hot weather, often with high humidity.",
    dos: [
      "Stay hydrated",
      "Avoid outdoor activities during peak hours",
      "Wear light clothing",
    ],
    donts: [
      "Don’t leave children in parked vehicles",
      "Don’t ignore signs of heatstroke",
      "Don’t consume alcohol",
    ],
    helpline: "Medical Helpline: 108, Disaster Helpline: 112",
  },
  {
    name: "Cold Wave",
    overview:
      "Sudden drop in temperature causing health risks and infrastructure damage.",
    dos: [
      "Wear warm layers",
      "Use heating safely",
      "Check on elderly neighbors",
    ],
    donts: [
      "Don’t use open flames indoors",
      "Don’t ignore frostbite symptoms",
      "Don’t leave pets outside",
    ],
    helpline: "Medical Helpline: 108, NDMA: 1078",
  },
  {
    name: "Fire",
    overview: "Uncontrolled burning causing damage to life and property.",
    dos: [
      "Use fire extinguishers",
      "Evacuate immediately",
      "Call fire services",
    ],
    donts: [
      "Don’t use elevators",
      "Don’t re-enter burning buildings",
      "Don’t block exits",
    ],
    helpline: "Fire: 101, Police: 100",
  },
  {
    name: "Chemical Spill",
    overview:
      "Release of hazardous substances that can harm health and environment.",
    dos: [
      "Evacuate the area",
      "Avoid contact with chemicals",
      "Report immediately",
    ],
    donts: [
      "Don’t touch or inhale fumes",
      "Don’t ignore symptoms",
      "Don’t eat exposed food",
    ],
    helpline: "Anti-Poison: 1066, NDMA: 1078",
  },
  {
    name: "Pandemic",
    overview:
      "Widespread outbreak of infectious disease across regions or globally.",
    dos: ["Wear masks", "Maintain hygiene", "Follow health advisories"],
    donts: [
      "Don’t spread misinformation",
      "Don’t ignore symptoms",
      "Don’t hoard supplies",
    ],
    helpline: "Aarogya Setu App, Medical Helpline: 108, AIDS Helpline: 1097",
  },
];

export default function DisasterGuide() {
  const [active, setActive] = useState("Tsunami");
  const current = disasters.find((d) => d.name === active);

  return (
    <div className="min-h-screen mt-17 bg-gradient-to-br from-green-100 via-emerald-200 to-teal-300 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-blue-700">
          Stay Safe, Stay Prepared
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Your guide to surviving natural disasters
        </p>
      </section>

      {/* Tabs - Scrollable, Centered, Hidden Scrollbar */}
      <div className="w-full px-4 mb-8">
        <div
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {disasters.map((d) => (
            <button
              key={d.name}
              onClick={() => setActive(d.name)}
              className={`snap-start shrink-0 px-4 py-2 rounded-full font-medium whitespace-nowrap transition ${
                active === d.name
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white border border-blue-300 hover:bg-blue-50"
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>

      {/* Disaster Details */}
      <section className="max-w-3xl mx-auto bg-gradient-to-br from-green-100 via-emerald-200 to-teal-300 border border-shadow-md rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold text-blue-700">{current.name}</h2>
        <p className="mt-2 text-gray-700">{current.overview}</p>

        <div className="mt-4 grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-green-600 mb-2">✅ Do’s</h3>
            <ul className="list-disc list-inside text-gray-700">
              {current.dos.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-red-600 mb-2">❌ Don’ts</h3>
            <ul className="list-disc list-inside text-gray-700">
              {current.donts.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <span className="font-semibold text-indigo-700">
            📞 Emergency Helpline:
          </span>{" "}
          {current.helpline}
        </div>
      </section>

      {/* Placeholder for Map + Toolkit */}
      <section className="px-4 text-center py-1 mt-2 ">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          🗺️ Interactive Map & Emergency Toolkit
        </h3>
        <p className="text-gray-600">
          Coming soon: Real-time alerts, contact forms, and downloadable guides.
        </p>
      </section>
    </div>
  );
}
