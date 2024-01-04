function loadMedia() {
    const fileInput = document.getElementById('mediaFile');
    const playerVideo = document.getElementById('videoPlayer');
    const playerAudio = document.getElementById('audioPlayer');

    const file = fileInput.files[0];

    if (file) {
      const fileType = file.type;

      if (fileType.includes('video')) {
        playerVideo.src = URL.createObjectURL(file);
        playerVideo.style.display = 'block';
        playerAudio.style.display = 'none';
        setBodyBackground(playerVideo.src);
      } else if (fileType.includes('audio')) {
        playerAudio.src = URL.createObjectURL(file);
        playerAudio.style.display = 'block';
        playerVideo.style.display = 'none';
      } else {
        alert('Formato de archivo no compatible. Por favor, selecciona un archivo MP4 o MP3.');
      }
    }
  }

  function loadMediaFromLink() {
    const playerVideo = document.getElementById('videoPlayer');
    const playerAudio = document.getElementById('audioPlayer');
    const mediaLinkInput = document.getElementById('mediaLink');
    const mediaLink = mediaLinkInput.value.trim();

    if (mediaLink !== '') {
      if (mediaLink.includes('.mp4')) {
        playerVideo.src = mediaLink;
        playerVideo.style.display = 'block';
        playerAudio.style.display = 'none';
        setBodyBackground(playerVideo.src);
      } else if (mediaLink.includes('.mp3')) {
        playerAudio.src = mediaLink;
        playerAudio.style.display = 'block';
        playerVideo.style.display = 'none';
      } else {
        alert('Enlace no válido. Por favor, introduce un enlace a un archivo MP4 o MP3.');
      }
    } else {
      alert('Por favor, introduce un enlace válido.');
    }
  }

  function setBodyBackground(src) {
    document.body.style.background = `url(${src}) center/cover no-repeat fixed`;
  }