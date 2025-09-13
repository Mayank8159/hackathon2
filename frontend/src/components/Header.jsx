import { Earth } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center space-y-2">
      <h1 className="text-3xl font-bold tracking-wide"><Earth className="inline-block h-10 px-0.5 w-10"/> Climate Analysis</h1>
      <p className="text-white/80 text-sm">
        Real-time climate insights powered by Open-Meteo. Visualize temperature, humidity, and wind patterns.
      </p>
    </header>
  );
}