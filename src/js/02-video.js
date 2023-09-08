import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const throttledOnTimeSave = throttle(getCurrentTime, 1000);

player.on('timeupdate', throttledOnTimeSave);

function getCurrentTime(data) {
     const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
    }
    
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
      player.setCurrentTime(parseFloat(savedTime));
    }
    
    player.getVideoTitle().then(function(title) {
      console.log('title:', title);
    });
    
    
