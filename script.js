

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

// const play = async (indexNumber) => {
//     playArray.pop()
//     let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
//     let get = await fetch(url)
//     let result = await get.json()
//     playArray.push(result[indexNumber])
//     localStorage.setItem("musicUrl", JSON.stringify(playArray))
// }

const audioPlayer = document.createElement('audio');

const play = async (indexNumber) => {
    pauseIt()
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    let get = await fetch(url)
    let result = await get.json()
    console.log(result[0]);
    audioPlayer.src = `${result[indexNumber].songUrl}`
    audioPlayer.play()
}

// let audioPlayer = document.createElement('audio')

// const playNow = () => {
//     pauseIt()
//     let theMusic = JSON.parse(localStorage.getItem('musicUrl'))
//     if (theMusic) {
//         console.log(theMusic);
//         audioPlayer.src = `${theMusic[0].songUrl}`
//         audioPlayer.play()
//     }
// }

const pauseIt = () => { 
    audioPlayer.pause()
}

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