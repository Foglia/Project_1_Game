const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); 

let speedX = canvas.width

//Player and Door (Player folder)
const door = new Door(2, 7, 617, 522, 'blue');
const player = new Player(1320, 340, 100, 150);

 //Game (Game folder)

let game;
 document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Enter':
            if(!game) {
                game = new Game(ctx, 140, 800, player);
                game.start();
            }
            
    }
})




/* let game = new Game(ctx, 140, 800, player); */

 //Game Start
/*  game.start(); */





