//Player Control

document.addEventListener('keydown', (e) => {
    switch(e.code){
        case 'ArrowRight': 
            player.moveRight
            if (player.x > 1200) player.x -= 0;
            else player.x += 50;
            break;  // always remember the break
        case 'ArrowLeft': 
            player.moveLeft
            if (player.x < 0) player.x += 0;
            else player.x -= 50;
            break;
            //                                                                                                                                                                               Velocity based code
            //player.moveLeft
            //player.speedX -= 5;
            //break;  // always remember the break
        case 'Enter':
            player.reStart
            player.x = 1200; 
            player.y = 350; 
            break;
    }
  });
  // This was add as a way to better control the rect.
  document.addEventListener('keyup', (e) => {
    player.speedX = 0;
  });