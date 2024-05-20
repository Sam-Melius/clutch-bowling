"use client";

export default function NeonLasers() {
  // Helper function to generate random coordinates
  const getRandomCoordinate = (max) => Math.floor(Math.random() * max);

  // Helper function to generate random animation duration
  const getRandomDuration = () => (Math.random() * 5 + 10).toFixed(2); // Between 5s and 12s

  // Array of gradient IDs
  const gradients = [
    "neonGreen",
    "neonBlue",
    "neonRed",
    "neonPurple",
    "neonOrange",
    "neonPink",
    "neonYellow",
  ];

  // Generate an array of lines with random coordinates and durations
  const lines = Array.from({ length: 20 }, (_, index) => ({
    x1: getRandomCoordinate(800),
    y1: getRandomCoordinate(600),
    x2: getRandomCoordinate(800),
    y2: getRandomCoordinate(600),
    gradient: gradients[index % gradients.length],
    duration: getRandomDuration(),
    counterClockwise: Math.random() > 0.5, // Randomly decide if the line should spin counterclockwise
  }));

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-screen -z-40 overflow-clip">
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#39ff14", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#00ff00", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#0ff", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#00f", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="neonRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ff073a", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ff0000", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="neonPurple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#e900ff", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#8000ff", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="neonOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ff8c00", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffa500", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ff1493", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ff69b4", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="neonYellow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffff00", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffd700", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {lines.map((line, index) => (
          <line
            key={index}
            className={`laser hue-rotate-15 blur-sm ${
              line.counterClockwise ? "spin-counterclockwise" : "spin-clockwise"
            }`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={`url(#${line.gradient})`}
            strokeWidth="4"
            style={{
              animationDuration: `${line.duration}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
