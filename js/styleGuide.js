document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('button-toggle');
    const showToggle = document.getElementById('show-content');
    const toggle2 = document.getElementById('button-toggle-2');
    const showToggle2 = document.getElementById('show-content-2');
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');
    const seekSlider = document.getElementById('seek-slider');
    const volumeSlider = document.getElementById('volume-slider');
    const playbackRateButton = document.getElementById('playback-rate');
    const muteButton = document.getElementById('mute-button');
    const unmuteButton = document.getElementById('unmute-button');
    const copyButton = document.getElementById('copyButton');
    const htmlCssContent = document.getElementById('htmlCssContent');

    // toggle function
    toggle.addEventListener('click', () => {
        showToggle.style.display = showToggle.style.display === 'block' ? 'none' : 'block';
        toggle.querySelector('.toggle-card-icon svg').classList.toggle('open');  // selector icon svg add class open vào svg khi mở ra
    });
    toggle2.addEventListener('click', () => {
        showToggle2.style.display = showToggle2.style.display === 'block' ? 'none' : 'block';
        toggle2.querySelector('.toggle-card-icon svg').classList.toggle('open');  // selector icon svg add class open vào svg khi mở ra
    });
    

    // play pause
    // Play and Pause functionality
    playButton.addEventListener('click', () => {
        audio.play();
        playButton.classList.add('audio-hide');
        pauseButton.classList.remove('audio-hide');
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        pauseButton.classList.add('audio-hide');
        playButton.classList.remove('audio-hide');
    });

    // Update the current time and duration
    audio.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeElement.textContent = formatTime(audio.currentTime);
        seekSlider.value = (audio.currentTime / audio.duration) * 100;
    });

    // tua audio
    seekSlider.addEventListener('input', () => {
        audio.currentTime = (seekSlider.value / 100) * audio.duration;
    });

    // Âm lượng
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value / 100;
        if (audio.volume === 0) {
            muteButton.classList.remove('audio-hide');
            unmuteButton.classList.add('audio-hide');
        } else {
            muteButton.classList.add('audio-hide');
            unmuteButton.classList.remove('audio-hide');
        }
    });

    // Mute và unmute
    muteButton.addEventListener('click', () => {
        audio.volume = 0;
        volumeSlider.value = 0;
        muteButton.classList.add('audio-hide');
        unmuteButton.classList.remove('audio-hide');
    });

    unmuteButton.addEventListener('click', () => {
        audio.volume = 1;
        volumeSlider.value = 100;
        unmuteButton.classList.add('audio-hide');
        muteButton.classList.remove('audio-hide');
    });

    // tốc độ của audio
    playbackRateButton.addEventListener('click', () => {
        const currentRate = audio.playbackRate;
        if (currentRate === 1) {
            audio.playbackRate = 1.5;
            playbackRateButton.textContent = '1.5x';
        } else if (currentRate === 1.5) {
            audio.playbackRate = 2;
            playbackRateButton.textContent = '2x';
        }
         else {
            audio.playbackRate = 1;
            playbackRateButton.textContent = '1x';
        }
    });

    // Format time in mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }



    // Copy function
    copyButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = htmlCssContent.innerText;
        document.body.appendChild(textarea);
    
        // Select the text and copy it
        textarea.select();
        document.execCommand('copy');
    
        // Remove the temporary textarea
        document.body.removeChild(textarea);
    
        // Change button text to "Copied"
        copyButton.querySelector('a').textContent = 'Copied';
    
        // Optionally, change back to "Copy" after a delay
        setTimeout(() => {
          copyButton.querySelector('a').textContent = 'Copy';
        }, 4000); // 4 seconds delay
      });

});
