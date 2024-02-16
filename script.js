

const fetchMe = async () => {
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    let response = await fetch(url)
    let songDetail = await response.json()
    console.log(songDetail);
    if (songDetail) {
        document.getElementById('loader').style.display = 'none'
        document.getElementById('innerSection').style.height = '100%'
    }
    for (let index = 0; index < songDetail.length; index++) {
        musics.innerHTML += `
                    <div class="musicIts">
                        <img src="${songDetail[index].songImage}" alt="" class="songImg"/> 
                        <div class="songTA">
                            <p>${songDetail[index].songTitle}</p>
                            <p>${songDetail[index].artistName}</p>
                        </div>
                        <div class="buttonArea">
                            <div class=""><i class="fas fa-heart" id="fovIcon" onclick="addFov(${index})"></i></div>
                            <button class="playButton" onclick="play(${index})">Play</button>
                        </div>
                    </div>
                `

    }
}

let playArray = []

const audioPlayer = document.createElement('audio');
let songImgPn = document.getElementById('songImgPn')
let titlePN = document.getElementById('titlePN')
let artistPN = document.getElementById('artistPN')


const play = async (indexNumber) => {
    pauseIt()
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    let get = await fetch(url)
    let result = await get.json()
    console.log(result[0]);
    audioPlayer.src = `${result[indexNumber].songUrl}`
    audioPlayer.play()
    songImgPn.src = `${result[indexNumber].songImage}`
    titlePN.innerHTML = `${result[indexNumber].songTitle}`
    artistPN.innerHTML = `${result[indexNumber].artistName}`
    document.getElementById('play').style.display = "none"
    document.getElementById('pause').style.display = "block"

    document.getElementById("")

    audioPlayer.addEventListener('timeupdate', function () {
        musicRange.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        totalDuration.innerHTML = formatTime(audioPlayer.duration);
        currentTime.textContent = formatTime(audioPlayer.currentTime);
    });

    musicRange.addEventListener('input', function () {
        const newPosition = (musicRange.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newPosition;
    });

}

function playAudio() {
    audioPlayer.play();
    document.getElementById('pause').style.display = 'block'
    document.getElementById('play').style.display = 'none'
}

function pauseAudio() {
    audioPlayer.pause();
    document.getElementById('pause').style.display = 'none'
    document.getElementById('play').style.display = 'block'
}

loopButton.addEventListener('click', () => {
    let loop = audioPlayer.loop = true
    if (loop) {
        document.getElementById('loopButton').style.color = '#c5baba'
    } else {
        document.getElementById('loopButton').style.color = '#c5baba'
        audioPlayer.loop = false
    }
})

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}

const pauseIt = () => {
    audioPlayer.pause()
}


let favoriteSong = []

const addFov = async (getIndex) => {
    let fovIcon = document.getElementById("fovIcon").style.color = 'white'

    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    let get = await fetch(url)
    let result = await get.json()
    if (fovIcon) {
        favoriteSong.push(result[getIndex])
        localStorage.setItem("favSongs", JSON.stringify(favoriteSong))
    }
}