// const isMobile = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;

// console.log("MOBILE: " + isMobile);

// if (!isMobile) {
//   window.onresize = function () {
//     location.reload();
//   };
// }

const isMobile = true;

let F = document.getElementById("miAudio");
const elem = document.documentElement;

document.getElementById("startAudio").addEventListener("click", () => {
  F.play();
  if (isMobile) {
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem
          .requestFullscreen()
          .then(() => {
            lockScreenOrientation();
          })
          .catch((err) => {
            console.error("Failed to enter fullscreen mode:", err);
          });
        console.log("1");
      } else if (elem.mozRequestFullScreen) {
        elem
          .mozRequestFullScreen()
          .then(() => {
            lockScreenOrientation();
          })
          .catch((err) => {
            console.error("Failed to enter fullscreen mode:", err);
          });
        console.log("Firefox");
      } else if (elem.webkitRequestFullscreen) {
        elem
          .webkitRequestFullscreen()
          .then(() => {
            lockScreenOrientation();
          })
          .catch((err) => {
            console.error("Failed to enter fullscreen mode:", err);
          });
        console.log("Chrome, Safari, Opera");
      } else if (elem.msRequestFullscreen) {
        elem
          .msRequestFullscreen()
          .then(() => {
            lockScreenOrientation();
          })
          .catch((err) => {
            console.error("Failed to enter fullscreen mode:", err);
          });
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

function lockScreenOrientation() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("portrait").catch(function (error) {
      console.error("Screen orientation lock failed:", error);
    });
  } else {
    console.log("Screen orientation lock is not supported on this device.");
  }
}
