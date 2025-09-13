export default function TimeSlider({ time, currentIndex, setCurrentIndex }) {
  return (
    <div className="text-center space-y-4">
      <input
        type="range"
        min={0}
        max={time.length - 1}
        value={currentIndex}
        onChange={(e) => setCurrentIndex(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-sm text-white/70">
        Showing data for: <span className="font-medium">{new Date(time[currentIndex]).toLocaleString()}</span>
      </p>
    </div>
  );
}