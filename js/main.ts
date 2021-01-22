import MediaPlayer from './plugins/MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads/Ads'

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector('.buttons__button--play');
playButton.onclick = () => player.togglePlay();

const pauseButton: HTMLElement = document.querySelector('.buttons__button--pause')
pauseButton.onclick = () => player.pause();

const muteButton: HTMLElement = document.querySelector('.buttons__button--mute');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}