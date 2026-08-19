let player = null;
let playerReady = false;

const playBtn = document.getElementById("playBtn");
const videoPoster = document.getElementById("videoPoster");
const youtubeVideo = document.getElementById("youtubeVideo");

function onYouTubeIframeAPIReady() {
    player = new YT.Player("youtubeVideo", {
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady() {
    playerReady = true;
}

playBtn.addEventListener("click", () => {

    if (!playerReady) {
        console.log("YouTube player is not ready yet.");
        return;
    }

    videoPoster.style.display = "none";

    playBtn.style.display = "none";

    youtubeVideo.style.display = "block";

    player.playVideo();
});

function onPlayerStateChange(event) {

    if (event.data === YT.PlayerState.PLAYING) {
        videoPoster.style.display = "none";
        playBtn.style.display = "none";
        youtubeVideo.style.display = "block";
    }

    if (event.data === YT.PlayerState.PAUSED) {
        youtubeVideo.style.display = "none";
        videoPoster.style.display = "block";
        playBtn.style.display = "flex";
    }

    if (event.data === YT.PlayerState.ENDED) {
        youtubeVideo.style.display = "none";
        videoPoster.style.display = "block";
        playBtn.style.display = "flex";
    }
}


// 

const newsData = [
    {
        image: "assets/images/webp/mountain.webp",
    },
    {
        image: "assets/images/webp/game.webp",
    },
    {
        image: "assets/images/webp/landing.webp",
    },
];

const newsList = document.getElementById("newsList");
const mainImage = document.getElementById("mainImage");



newsList.innerHTML = newsData
    .map(
        (item, index) => `
            <div class="news-card ${index === 2 ? "active" : ""}" data-index="${index}">

                <img src="${item.image}" alt="News img">

                <div class="news-info">

                    <span class="category">
                        Valorant
                    </span>

                    <h3>
                        Rumor: Destiny 2's Next Returning Raid Possibly Revealed By Known Leaker
                    </h3>

                    <div class="clock">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z" fill="#D4FF27"/>
                        </svg>
                        15 MAY 23
                    </div>

                </div>

            </div>
        `
    )
    .join("");



document.querySelectorAll(".news-card").forEach((card) => {

    card.addEventListener("click", () => {

        const index = Number(card.dataset.index);


        mainImage.src = newsData[index].image;


        document.querySelectorAll(".news-card").forEach((item) => {
            item.classList.remove("active");
        });

        card.classList.add("active");
    });

});


mainImage.src = newsData[2].image;


document.getElementById("currentYear").textContent =
    new Date().getFullYear();