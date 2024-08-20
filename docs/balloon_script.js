document.addEventListener("DOMContentLoaded", () => {
  const balloons = document.querySelectorAll("#balloon");

  const xPositions = Array.from(
    { length: balloons.length },
    (_, i) => i * 8 + 5
  );

  for (let i = xPositions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [xPositions[i], xPositions[j]] = [xPositions[j], xPositions[i]];
  }

  balloons.forEach((balloon, index) => {
    gsap.to(balloon, {
      y: -window.innerHeight,
      duration: 10 + index * 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      delay: index * 0.5,
    });

    balloon.style.left = `${xPositions[index]}%`;
  });
});
