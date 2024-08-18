gsap.to(".invitation-container", {
  duration: 1,
  opacity: 1,
  scale: 1,
  ease: "back.out(1.7)",
});
gsap.to(".invitation-title", {
  duration: 1,
  opacity: 1,
  delay: 0.5,
  ease: "power2.inOut",
});
gsap.to(".invitation-subtitle", {
  duration: 1,
  opacity: 1,
  delay: 1,
  ease: "power2.inOut",
});
gsap.to(".name", {
  duration: 1,
  opacity: 1,
  delay: 1.5,
  ease: "power2.inOut",
});
gsap.to(".date-time p", {
  duration: 1,
  opacity: 1,
  delay: 2,
  stagger: 0.5,
  ease: "power2.inOut",
});
gsap.to(".reveal-button", {
  duration: 1,
  opacity: 1,
  delay: 2.5,
  ease: "power2.inOut",
});

function revealLocation() {
  const location = document.getElementById("location");
  if (location.style.display === "none" || location.style.display === "") {
    gsap.to("#location", {
      display: "block",
      duration: 1,
      opacity: 1,
      y: 0,
    });
  }
}

setTimeout(() => {
  document.querySelector(".preloader").style.display = "none";
}, 1500);
