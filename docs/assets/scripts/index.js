const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); 

let speedX = canvas.width


//Background
ctx.fillStyle = 'lightblue'
ctx.fillRect (0, 0, 1420, 400);
ctx.fillStyle = 'lightgrey'
ctx.fillRect (0, 100, 1420, 100);

//Player and Door (Player folder)
const door = new Door(10, 20, 480, 500, 'blue');
const player = new Player(1320, 340, 100, 150);

 //Game (Game folder)
let game = new Game(ctx, 140, 800, player);

 //Game Start
 game.start();





