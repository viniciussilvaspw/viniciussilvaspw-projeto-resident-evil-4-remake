document.addEventListener('DOMContentLoaded', function () {
    const player = new Plyr('#video-player', {
    
    });

    
    const customPlayButton = document.getElementById('custom-play-button');

    if (customPlayButton) {
      customPlayButton.addEventListener('click', function () {
       
        if (player.paused) {
          // Se o vídeo estiver pausado, reproduza-o
          player.play();
        } else {
          // Caso contrário, pause o vídeo
          player.pause();
        }
      });
    }
  });