import Hero from "./hero.js"

// Selecting the Canvas element by id
const gameArea = document.querySelector('#game-area')
//initializing the canvas element with a 2d property
const ctx = gameArea.getContext('2d');
console.log(gameArea)
// width and height properties
gameArea.width = 550;
gameArea.height = 600;

//instance of the hero
const knight = new Hero(gameArea.width/2.2, gameArea.height / 1.3)

function gameLoop(){
    //invoking the style properties of the hero with a function
    setCommonStyle()
    //setting canvas color to gray
    ctx.fillStyle = "gray";
    //making the canvas start at 0,0 with the canvas width and height properties
    ctx.fillRect(0,0,gameArea.width, gameArea.height)
    //drawing the knight instance with the draw method
    knight.draw(ctx)
}

// using a windows interal method to call gameloop 60 times per second to fresh game
setInterval(gameLoop, 1000 /60)

//function with properties of the hero shape
function setCommonStyle(){
    ctx.shadowColor = '#d53';
    ctx.shadowBlur = 10;
    ctx.lineJoin = `bevel`;
    ctx.lineWidth= 10;
}

// const Johnny = new Hero(['💎', '💎','💎','💎','💎'], 5, [],1,1,"red", 1,1)
// console.log(Johnny.attack())
// console.log(Johnny)

// function startGame(){
//     start: function start(){
//      const Johnny = new Hero(100, 5, [],1,1,"red", 1,1)
//      console.log("start")
//     }
// }
// let horizontal = 0;
// let vertical = 0;
// document.addEventListener('keydown', function(e){
// if(e.key === 'a'){
//    console.log(e)
//    horizontal-=2
//    hero.style.left= horizontal + "px"
//    console.log(horizontal)
// }
// })

// document.addEventListener('keydown',function(e){
//     if(e.key === 'd'){
//         console.log(e)
//         horizontal+=2
//         hero.style.left = horizontal + 'px'
//         console.log(horizontal)
//     }
// })
// document.addEventListener('keydown',function(e){
//     if(e.key === 'w'){
//         console.log(e)
//         vertical-=2
//         hero.style.top = vertical+ 'px'
//         console.log(vertical)
//     }
// })

// document.addEventListener('keydown',function(e){
//     if(e.key === 's'){
//         console.log(e)
//         vertical+=2
//         hero.style.top = vertical+ 'px'
//         console.log(vertical)
//     }
// })