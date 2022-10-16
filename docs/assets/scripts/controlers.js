//Player Control

document.addEventListener('keydown', (e) => {
    switch(e.code){
        case 'ArrowRight': 
            player.speedX += 1;
            break;  // always remember the break
        case 'ArrowLeft': 
            player.speedX -= 1;
            break;  // always remember the break
    }
  });
  // This was add as a way to better control the rect.
  document.addEventListener('keyup', (e) => {
    player.speedX = 0;
  });