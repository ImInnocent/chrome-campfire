const playButton = document.getElementById("playButton");
const playButtonImg = document.getElementById("playButtonImg");

const fullScreenButton = document.getElementById("fullScreenButton");

const audio = document.getElementById("controls");

playButton.onclick = () => {
  if (audio.paused) {
    audio.play();
    playButtonImg.src = "mute.jpg"
  }
  else {
    audio.pause();
    playButtonImg.src = "unmute.jpg"
  }
}

fullScreenButton.onclick = () => {
  chrome.windows.getCurrent(w => {
    if (w.state !== "fullscreen") {
      chrome.windows.update(w.id, { state: "fullscreen" });
    } else {
      chrome.windows.update(w.id, { state: "normal" });
    }
  })
}
