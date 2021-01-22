import MediaPlayer from './plugins/MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';
import Ads from './plugins/Ads/index.js';

let video = document.querySelector('video');
let player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

let playButton = document.querySelector('.buttons__button--play');
playButton.onclick = () =>  player.togglePlay();
let pauseButton = document.querySelector('.buttons__button--pause');
pauseButton.onclick = () => player.pause();
let muteButton = document.querySelector('.buttons__button--mute');
muteButton.onclick = function () {
    if (player.media.muted) {
        player.unmute();
    }
    else {
        player.mute();
    }
};
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')["catch"](function (error) {
        console.log(error.message);
    });
}
