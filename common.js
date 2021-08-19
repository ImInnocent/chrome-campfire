const playButton = document.getElementById("playButton");
const playButtonImg = document.getElementById("playButtonImg");
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
