//Player Control
document.addEventListener('keydown', (e) => {
    switch(e.code){
        case 'ArrowRight': 
            player.x += player.speedX;
            break;  
        case 'ArrowLeft': 
        player.x -= player.speedX;
            break;
        case 'KeyR':
            player.resetPosition()
            break; 
    }
  });

