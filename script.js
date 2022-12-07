var buttonSpringen = document.querySelector('section > div div:first-of-type button');
var buttonEten = document.querySelector('section > div div:nth-of-type(2) button');
var buttonSlapen = document.querySelector('section > div div:nth-of-type(3) button');
var video = document.querySelector('section > video');

buttonSpringen.addEventListener('click', speelSpringen);
buttonEten.addEventListener('click', speelEten);
buttonSlapen.addEventListener('click', speelSlapen);

function speelSpringen() {
    console.log('run springen');
    video.src = "videos/konijn_springen_klaar.mp4";
}

function speelEten() {
    video.src = "videos/konijn_eten_klaar.mp4";
    console.log('run eten');
}

function speelSlapen() {
    video.src = "videos/konijn_slapen_klaar.mp4";
    console.log('sup slapen');
}

video.play().then(function() {
    // Automatic playback started!
}).catch(function(error) {
    // Automatic playback failed.
});