const isMobile = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;

console.log("MOBILE: " + isMobile);

if (!isMobile) {
  window.onresize = function () {
    location.reload();
  };
}

let F = document.getElementById("miAudio");
const elem = document.documentElement;

document.getElementById("startAudio").addEventListener("click", () => {
  F.play();
  if (isMobile) {
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
        console.log("1");
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
        console.log("Firefox");
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
        console.log("Qrome, Safari, Opera");
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
        console.log("Edge");
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setTimeout(function () {
        location.reload();
      }, 1000);
    }
  }
});
