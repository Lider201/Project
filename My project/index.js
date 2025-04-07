const tracks = [
    {
        title: "OZEN",
        artists: "TENZOO, Zhanbxqqm SKYVER",
        image: "/public/images/image_example.jpg",
        audio: "/public/trecks/example.mp3"
    },
    {
        title: "Ransom",
        artists: "Lil Tecca",
        image: "/public/images/image_example_1.jpg",
        audio: "/public/trecks/example_2.mp3"
    },
    {
        title: "Lost Soul",
        artists: "NBSPLV",
        image: "/public/images/image_example_2.jpg",
        audio: "/public/trecks/example_1.mp3"
    }
]
function openTab(env, name) {
    let i, tabcontent, tablinks;
    tabcontent=document.getElementsByClassName("tabcontent");
    for (i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablinks");
    for (i=0;i<tablinks.length;i++) {
        tablinks[i].className=tablinks[i].className.replace("active", "");
    }
    document.getElementById(name).style.display="block";
    env.currentTarget.className+=" active";
}
function renderPlayList(tracks) {
    const container = document.getElementById("MyPlaylist");
    container.innerHTML="";
    tracks.forEach(track => {
        const player = document.createElement("div");
        player.classList.add("player", "small");
        player.innerHTML = `
        <img class="track-image" src="${track.image}" alt="Track Cover">
        <div class="audio-controls">
            <h3>${track.title}</h3>
            <h5>${track.artists}</h5>
            <audio controls>
                <source src="${track.audio}" type="audio/mpeg">
            </audio>
        </div>
        `;
        container.appendChild(player);
    });
    setupAudioPauseBehaviour();
}
document.addEventListener("DOMContentLoaded", () => {
    renderPlayList(tracks);
})
function setupAudioPauseBehaviour() {
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach(audio=> {
    audio.addEventListener("play", () => {
        audioElements.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});
}