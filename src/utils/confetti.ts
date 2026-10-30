import confetti from "canvas-confetti";

export const triggerBirthdayConfetti = () => {
  // Center blast
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#9B1B48", "#F8CAD5", "#E5AC99", "#CFA06E", "#FCE7EC", "#FFFFFF"],
    ticks: 200,
    gravity: 0.8,
    scalar: 1.2,
  });

  // Left & right cannons
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ["#9B1B48", "#F8CAD5", "#CFA06E"],
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ["#9B1B48", "#F8CAD5", "#CFA06E"],
    });
  }, 250);
};

export const triggerFireworks = (durationMs = 4000) => {
  const animationEnd = Date.now() + durationMs;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval: NodeJS.Timeout = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / durationMs);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 },
      colors: ["#9B1B48", "#F8CAD5", "#E5AC99", "#CFA06E", "#FFE5EC"],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
      colors: ["#B83A5D", "#FCE7EC", "#FAD4C0", "#FFD700", "#FFFFFF"],
    });
  }, 250);
};

