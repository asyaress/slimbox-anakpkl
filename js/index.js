// imagesLoaded.js, Hammer.js, and Sequence.js loaded as external assets


var sequenceElement = document.getElementById("sequence");

var options = {
  keyNavigation: true,
  animateCanvas: false,
  phaseThreshold: false,
  reverseWhenNavigatingBackwards: true
}

var mySequence = sequence(sequenceElement, options);
const audio = document.getElementById('background-audio');
const audioIcon = document.getElementById('audio-icon');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    audioIcon.textContent = '🔊'; // Ikon audio nyala
    audioIcon.className = 'audio-on';
  } else {
    audio.pause();
    audioIcon.textContent = '🔇'; // Ikon audio mati
    audioIcon.className = 'audio-off';
  }
}

