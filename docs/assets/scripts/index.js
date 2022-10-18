const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); 

let speedX = canvas.width


//Background
ctx.fillStyle = 'lightblue'
ctx.fillRect (0, 0, 1300, 400);
ctx.fillStyle = 'lightgrey'
ctx.fillRect (0, 400, 1300, 100);

//Player and Door (Player folder)
const door = new Door(50, 150, 180, 300, 'blue');
const player = new Player(1200, 340, 100, 150);

 //Game (Game folder)
let game = new Game(ctx, 1200, 800, player);

 //Game Start
 game.start();





