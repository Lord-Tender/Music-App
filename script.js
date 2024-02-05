const fetchMe = () => {
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    fetch(url)
        .then(res => res.json())
        .then((conRes) => {
            console.log(conRes);
            conRes.map((song) => {
                musics.innerHTML += `
                    <div class="musicIts">
                        <img src="${song.songImage}" alt="" class="songImg"/> 
                        <div class="songTA">
                            <p>${song.songTitle}</p>
                            <p>${song.artistName}</p>
                        </div>
                    </div>
                `
            })
        })
        .catch((err)=>{
            console.log(err);
        })
}