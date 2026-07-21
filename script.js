const radio = document.getElementById("radio");
const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");
const volume = document.getElementById("volume");
const statusText = document.getElementById("statusText");

// Set initial volume
radio.volume = volume.value;

// Play / Pause
playButton.addEventListener("click", () => {

    if (radio.paused) {

        statusText.textContent = "Connecting...";

        radio.play().catch(() => {

            statusText.textContent = "Unable to connect";

        });

    } else {

        radio.pause();

    }

});

// Playing
radio.addEventListener("playing", () => {

    playIcon.src = "icons/pause.svg";

    statusText.textContent = "Connected";

});

// Paused
radio.addEventListener("pause", () => {

    playIcon.src = "icons/play.svg";

    statusText.textContent = "Stopped";

});

// Error
radio.addEventListener("error", () => {

    playIcon.src = "icons/play.svg";

    statusText.textContent = "Stream Offline";

});

// Volume
volume.addEventListener("input", () => {

    radio.volume = volume.value;

});