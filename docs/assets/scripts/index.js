
const canvas = document.getElementById('canvas'); // Canvas Element
const ctx = canvas.getContext('2d'); //Contex: 2d graphis  

let speedX = canvas.width

//Background
ctx.fillStyle = 'lightblue'
ctx.fillRect (0, 0, 1300, 400);
ctx.fillStyle = 'lightgrey'
ctx.fillRect (0, 400, 1300, 100);

//Player and Door (Player folder)
const door = new Player(50, 150, 180, 300, 'blue');
const player = new Player(1200, 350, 60, 80, 'red');
//  const obstacle = new Obstacles(1100, 0, 30, 30, 'white');
//  obstacles.push(obstacle);
//  const obstacle2 = new Obstacles(800, 0, 20, 20, 'white');
//  obstacles.push(obstacle2);

 //Game (Game folder)
 let game = new Game(ctx, 1200, 800, player);

 //Game Start
 game.start();





