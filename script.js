const radio = document.getElementById("radio");
const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");
const volume = document.getElementById("volume");
const statusText = document.getElementById("statusText");
const liveText = document.getElementById("liveText");
const liveDot = document.getElementById("liveDot");

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
// Playing
radio.addEventListener("playing", () => {

    playIcon.src = "icons/pause.svg";

    statusText.textContent = "🟢 Connected";

    liveText.textContent = "LIVE ON AIR";

    liveDot.classList.remove("offline");
    liveDot.classList.add("online");

});

// Paused
// Paused
radio.addEventListener("pause", () => {

    playIcon.src = "icons/play.svg";

    statusText.textContent = "⏸ Stopped";

    liveText.textContent = "OFF AIR";

    liveDot.classList.remove("online");
    liveDot.classList.add("offline");

});

// Error
// Error
radio.addEventListener("error", () => {

    playIcon.src = "icons/play.svg";

    statusText.textContent = "🔴 Stream Offline";

    liveText.textContent = "OFF AIR";

    liveDot.classList.remove("online");
    liveDot.classList.add("offline");

});

// Volume
volume.addEventListener("input", () => {

    radio.volume = volume.value;

});