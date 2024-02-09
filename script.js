

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
}

const pauseIt = () => {
    audioPlayer.pause()
}

pauseButton.addEventListener('click', () => {
    let pausedD = document.getElementById('pause').style.display = "block"
    if (pausedD) {
        audioPlayer.pause()
        document.getElementById('pause').style.display = "none"
        let itIsPaused = document.getElementById('play').style.display = "block"
    }else if (audioPlayer.paused) {
        alert("%^DT%dtyy")
        console.log("You are a bad boy");
        audioPlayer.play()
    }
})

let favoriteSong = []

const addFov = async (getIndex) => {
    let fovIcon = document.getElementById("fovIcon").style.color = 'white'

    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    let get = await fetch(url)
    let result = await get.json()
    // console.log(result[0]);
    if (fovIcon) {
        favoriteSong.push(result[getIndex])
        localStorage.setItem("favSongs", JSON.stringify(favoriteSong))
    }
}