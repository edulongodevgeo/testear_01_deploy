window.onload = function() {
    // Esconde a tela de carregamento após 2 segundos
    setTimeout(function() {
        document.querySelector('.arjs-loader').style.display = 'none';
    }, 2000);

    // Botão de vídeo para iniciar a reprodução
    const videoButton = document.getElementById('video-button');
    const videoElement = document.getElementById('video');
    const textVideo = document.getElementById('text-video');

    videoButton.addEventListener('click', function() {
        if (videoElement.paused) {
            videoElement.play();
            textVideo.textContent = 'PAUSE';
        } else {
            videoElement.pause();
            textVideo.textContent = 'PLAY';
        }
    });

    // Botões de controle (exemplo de interatividade com movimento)
    const buttonLeft = document.getElementById('button-left');
    const buttonRight = document.getElementById('button-right');
    const buttonUp = document.getElementById('button-up');
    const buttonDown = document.getElementById('button-down');

    buttonLeft.addEventListener('click', function() {
        // Exemplo de ação ao pressionar o botão esquerdo (mover ou interagir)
        alert('Movimento para a esquerda!');
    });

    buttonRight.addEventListener('click', function() {
        alert('Movimento para a direita!');
    });

    buttonUp.addEventListener('click', function() {
        alert('Movimento para cima!');
    });

    buttonDown.addEventListener('click', function() {
        alert('Movimento para baixo!');
    });
}
