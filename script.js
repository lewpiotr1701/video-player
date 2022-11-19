// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

// @ts-nocheck
const video = document.querySelector("#player");
const playButton = document.querySelector("#play");
const stopButton = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");


// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("timeupdate", updateProgressBarAndTimestamp);
video.addEventListener("ended", stopVideo);

playButton.addEventListener("click", toggleVideoStatus);

stopButton.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgressBar);


// Play & pause video
function toggleVideoStatus() {

    if (video.paused) {
        playButton.innerHTML = '<i class="las la-pause la-2x"></i>';
        video.play();
    } else {
        playButton.innerHTML = '<i class="las la-play la-2x"></i>';
        video.pause();
    }

}

// Update progress & timestamp
function updateProgressBarAndTimestamp() {

    progress.value = (video.currentTime / video.duration) * 100;

    // Get number of minutes and seconds
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime - (minutes * 60));

    const minuteValue = minutes.toString().padStart(2, '0');
    const secondValue = seconds.toString().padStart(2, '0');

    const videoTime = `${minuteValue}:${secondValue}`;
    timestamp.textContent = videoTime;

}

// Stop video
function stopVideo() {

    video.pause();
    video.currentTime = 0;
    playButton.innerHTML = '<i class="las la-play la-2x"></i>';

}

// Set video progress
function setVideoProgressBar() {

    const currentValue = progress.value;

    video.currentTime = video.duration * (currentValue / 100);

}