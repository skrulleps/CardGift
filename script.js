function reloadPageEvery(seconds) {
    setTimeout(function() {
      location.reload();
    }, seconds * 1000);
  }
  reloadPageEvery(10);

var audio = document.getElementById("myAudio"); // Mendapatkan elemen audio

function playAudio() {
  audio.play(); // Memulai pemutaran audio
}