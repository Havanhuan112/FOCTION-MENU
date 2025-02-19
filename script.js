function handleClick() {
    showLoadingBar();
}

function showLoadingBar() {
    let bar = document.getElementById("loadingBar");
    let progress = document.querySelector(".progress");
    let successIcon = document.getElementById("successIcon");
    let loadingIcon = document.getElementById("loadingIcon");

    progress.style.width = "0%";
    successIcon.style.display = "none";
    loadingIcon.style.display = "block";
    bar.style.display = "block";

    setTimeout(() => {
        progress.style.width = "100%";
    }, 10);

    setTimeout(() => {
        loadingIcon.style.display = "none";
        successIcon.style.display = "block";
        setTimeout(() => {
            bar.style.display = "none";
        }, 2000);
    }, 4000);
}
function updateCoderTime() {
    let timeElement = document.getElementById("coder-time");
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateCoderTime, 1000);
updateCoderTime();
document.addEventListener("DOMContentLoaded", function () {
    let musicList = [
        "music1.mp3",
        "music2.mp3",
        "music3.mp3",
        "music4.mp3",
        "music5.mp3"
    ];

    let musicLoading = document.getElementById("music-loading");
    let musicElement = document.getElementById("background-music");
    let musicSource = document.getElementById("music-source");

    // Chờ 4 giây, sau đó chọn nhạc ngẫu nhiên
    setTimeout(() => {
        let randomMusic = musicList[Math.floor(Math.random() * musicList.length)];
        musicSource.src = randomMusic;
        musicElement.load();
        musicElement.play();
        
        // Ẩn thông báo
        musicLoading.classList.add("hidden");
    }, 4000);
});