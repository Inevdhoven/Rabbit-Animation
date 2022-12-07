var buttonStart = document.querySelector('section > div div:first-of-type button');
var buttonSpringen = document.querySelector('section > div div:nth-of-type(2) button');
var buttonEten = document.querySelector('section > div div:nth-of-type(3) button');
var buttonSlapen = document.querySelector('section > div div:nth-of-type(4) button');
var video = document.querySelector('section > video');

buttonStart.addEventListener('click', spelenIdle);
buttonSpringen.addEventListener('click', speelSpringen);
buttonEten.addEventListener('click', speelEten);
buttonSlapen.addEventListener('click', speelSlapen);

function spelenIdle() {
    video.play();
    video.muted = false;
    video.src = "videos/konijn_idle_klaar.mp4";
}

function speelSpringen() {
    video.muted = false;
    video.src = "videos/konijn_springen_klaar.mp4";
}

function speelEten() {
    video.muted = false;
    video.src = "videos/konijn_eten_klaar.mp4";
}

function speelSlapen() {
    video.muted = false;
    video.src = "videos/konijn_slapen_klaar.mp4";
}

