let bgm;

function initAudio(musicPath) {
    if (!bgm) {
        bgm = new Audio(musicPath);
        bgm.loop = true;
        bgm.volume = 0.3;
    }
}

function playBGM(musicPath = './1.mp3') {
    if (!bgm || bgm.src !== musicPath) {
        if (bgm) {
            bgm.pause();
        }
        initAudio(musicPath);
    }
    bgm.play().catch(function(error) {
        console.log("Audio autoplay failed:", error);
        // Consider prompting the user to interact with the page to enable audio
    });
}

function pauseBGM() {
    if (bgm) {
        bgm.pause();
    }
} 