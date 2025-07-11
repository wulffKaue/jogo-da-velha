let music = document.getElementById("containermsc");
let sound = document.getElementById("sound1");
let controls = document.getElementById("controls1");
let audio = document.getElementById("audio");
let nav = document.getElementById("nav");
let numberspeed = document.getElementById("number-speed");
let speedmusicdiv = document.getElementById("speed-music");
let panel = document.getElementById("panel");

function closePanel() {
  panel.style.visibility = "hidden";
}

function openPanel() {
  panel.style.visibility = "visible";
}

function play() {
  audio.play();
  nav.style.visibility = "visible";
}

function pause() {
  audio.pause();
  nav.style.visibility = "hidden";
}

function decreasevel() {
  audio.playbackRate = Math.max(0.1, audio.playbackRate - 0.1);
  document.getElementById("number-speed").innerHTML =
    audio.playbackRate.toFixed(1) + "X";
  numberspeed.style.visibility = "visible";
  speedmusicdiv.style.visibility = "visible";
  setTimeout(function () {
    document.getElementById("speed-music").style.visibility = "hidden";
  }, 6000);
  setTimeout(function () {
    document.getElementById("number-speed").style.visibility = "hidden";
  }, 6000);
}

function increasevel() {
  audio.playbackRate = Math.max(0.1, audio.playbackRate + 0.1);
  document.getElementById("number-speed").innerHTML =
    audio.playbackRate.toFixed(1) + "X";
  numberspeed.style.visibility = "visible";
  speedmusicdiv.style.visibility = "visible";
}

function back() {
  audio.currentTime += 10;
}

function advance() {
  audio.currentTime -= 10;
}