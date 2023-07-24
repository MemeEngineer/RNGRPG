import Hero from "./hero.js"
import BulletController from "./bulletcontroller.js";
import Mob from './mob.js'
import { Diamond } from "./item.js";

// Selecting the Canvas element by id
const gameArea = document.querySelector('#game-area')
//initializing the canvas element with a 2d property
const ctx = gameArea.getContext('2d');
//inventory slot
const gameItem = document.querySelector('#item')

//Health bar
const healthbar = document.querySelector('#health')

//kill count
const killCount = document.querySelector('#kill-count')
console.log(killCount)
let kill = 0;

// width and height properties
gameArea.width = 550;
gameArea.height = 600;

//diamond is an item
const diamond = new Diamond(10, ['💎'])

//instance of the bulletcontroller
const bulletController = new BulletController(gameArea);
//instance of the hero
const knight = new Hero(gameArea.width/2.2, gameArea.height / 1.3,bulletController, ['❤','❤','❤'] )

const arrMob = [
    new Mob( 250, 20, "yellow"),
    new Mob(350, 20, "purple"),
    new Mob(150, 20, "Red"),
    new Mob(50, 20, "blue"),
    new Mob(450, 20, "green")
]
function spawnMob(){
    while( arrMob.length <= 0){
        const mobs1 =  new Mob( 250, 20, "yellow")
        const mobs2 =  new Mob(350, 20, "purple")
        const mobs3 =  new Mob(150, 20, "Red")
        const mobs4 =  new Mob(50, 20, "blue")
        const mobs5 =  new Mob(450, 20, "green")
        arrMob.push(mobs1, mobs2, mobs3, mobs4, mobs5)

    }
}


function gameLoop(){
    
    //invoking the style properties of the hero with a function
    setCommonStyle()
    //setting canvas color to gray
    ctx.fillStyle = "gray";
    //making the canvas start at 0,0 with the canvas width and height properties
    ctx.fillRect(0,0,gameArea.width, gameArea.height)
    //draw bullets on canvas/gameArea
    bulletController.draw(ctx)
    //drawing the knight instance with the draw method
    knight.draw(ctx)
    health.innerText = knight.health
    //mob spawn
    arrMob.forEach((mob)=> {
        if(bulletController.collideWith(mob)){
            if(mob.health.length <= 0){
                const index = arrMob.indexOf(mob);
                arrMob.splice(index, 1)
                spawnMob()
                kill++
                killCount.innerText = kill
                let num = Math.floor(Math.random() * (11 - 0) + 0 )
                if(num === diamond.itemid){
                    knight.item.push(diamond.item)
                    gameItem.innerText = knight.item
                    gameCondition.checkWin()
                }
            }
        }else{
            mob.draw(ctx)
        }
    })
    arrMob.forEach((mob)=> {
        if(mob.collideWithHero(knight)){
                console.log('Game over')
                knight.takeDamage();
        }else{
            knight.draw(ctx)
        }
    })
   
    

    
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

//game win/lose conditions
const gameCondition = {
    checkWin(){
        if(knight.item[0] == '💎'){
            console.log('You have Won')
        }

        if(knight.health.length <= 0){
            console.log('You have lost')
        }
    }
}
//restart button
const restart = document.querySelector('#restart')

restart.addEventListener('click', function(){
    window.location.reload()
})

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
