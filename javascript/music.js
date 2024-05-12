const musicButton = document.getElementById('musicButton');
const musicPlayer = document.getElementById('musicPlayer');

let isPlaying = false;
let currentSongIndex = 0;
let playbackPosition = 0; // Variable to store the playback position
const songs = [
    "../../storage/music/song1.mp3",
    "../../storage/music/song2.mp3",
    "../../storage/music/song3.mp3",
    "../../storage/music/song4.mp3",
    "../../storage/music/song5.mp3",
    "../../storage/music/song6.mp3",
    "../../storage/music/song7.mp3",
    "../../storage/music/song8.mp3",
    "../../storage/music/song9.mp3",
    "../../storage/music/song10.mp3",
    "../../storage/music/song11.mp3",
    "../../storage/music/song12.mp3",
    "../../storage/music/song13.mp3",
    "../../storage/music/song14.mp3"    
    // Add more songs as needed
];

function toggleMusic() {
    if (isPlaying) {
        playbackPosition = musicPlayer.currentTime; // Store the current playback position
        musicPlayer.pause();
    } else {
        playCurrentSong();
    }
    isPlaying = !isPlaying;
    updateButton(); // Update button appearance after toggling playback
}

function playCurrentSong() {
    musicPlayer.src = songs[currentSongIndex];
    musicPlayer.currentTime = playbackPosition; // Set the playback position
    musicPlayer.load(); // Ensure the audio is loaded before playing
    const playPromise = musicPlayer.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Playback started successfully
            console.log('Audio playback started.');
        }).catch(error => {
            // Auto-play prevented, handle accordingly
            console.error('Auto-play prevented:', error);
        });
    }
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playbackPosition = 0; // Reset playback position when playing the next song
    playCurrentSong();
}

function updateButton() {
    musicButton.src = isPlaying ? "../../icons/pause.png" : "../../icons/play.png";
}

musicButton.addEventListener('click', () => {
    toggleMusic();
});

musicPlayer.addEventListener('ended', () => {
    playNextSong();
});
