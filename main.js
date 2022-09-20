// get all keys
const keys = document.querySelectorAll(".key");

// play
function playNote(event) {
  //   console.log(event.keyCode);
  let audioKeyCode = getKeyCode(event);
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
  console.log(key);

  const keyExists = key;
  if (!keyExists) {
    return;
  }

  playAudio(audioKeyCode);
  addOrRemovePlayingClass(key);
}

function addOrRemovePlayingClass(key) {
  key.classList.add("playing");
}

//
function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"; // boolean
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    // alert("nao é uma tecla valida");
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function removePlayingClass(event) {
  event.target.classList.remove("playing");
}

// click
keys.forEach(function (key) {
  key.addEventListener("click", playNote);
  key.addEventListener("transitionend", removePlayingClass);
});

// keyboard type
window.addEventListener("keydown", playNote);
