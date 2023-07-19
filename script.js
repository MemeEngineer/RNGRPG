// Selecting the Canvas element by id
const gameArea = document.querySelector('#game-area')
//initializing the canvas element with a 2d property
const ctx = gameArea.getContext('2d');
console.log(gameArea)
// width and height properties
gameArea.width = 550;
gameArea.height = 600;

function gameLoop(){
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,gameArea.width, gameArea.height)
}

setInterval(gameLoop, 1000 /60)

const hero = document.querySelector('#hero')
console.log(hero)
const mob = document.querySelector('#mob')

class Character{
    constructor(health, damage, item=[]){
        this.health = health;
        this.damage = damage;
        this.item = item;
    }
}


class Hero extends Character{
    constructor(health= ['💎'],damage,item =[],width, height,color, x, y,type){
        super(health, damage, item=[])
        this.health = health;
        this.damage = damage;
        this.item = item;
        this.width = width;
        this.height= height;
        this.x = x;
        this.y= y;
        this.update = function(){
            ctx=gameArea.context
            ctx.save()
            ctx.translate(this.x, this.y)
            ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
            ctx.fillStyle= "red";
            ctx.restore()

        }
    }
    attack(){
        console.log(`**Swings Sword***`)
        this.health.pop()
    }
}

class Mob extends Character{
    constructor(health, damage, item= []){
        super(health,damage,item=[])
        this.health = health;
        this.damage = damage;
        this.item = item;
    }
}

const Johnny = new Hero(['💎', '💎','💎','💎','💎'], 5, [],1,1,"red", 1,1)
console.log(Johnny.attack())
console.log(Johnny)

// function startGame(){
//     start: function start(){
//      const Johnny = new Hero(100, 5, [],1,1,"red", 1,1)
//      console.log("start")
//     }
// }
let horizontal = 0;
let vertical = 0;
document.addEventListener('keydown', function(e){
if(e.key === 'a'){
   console.log(e)
   horizontal-=2
   hero.style.left= horizontal + "px"
   console.log(horizontal)
}
})

document.addEventListener('keydown',function(e){
    if(e.key === 'd'){
        console.log(e)
        horizontal+=2
        hero.style.left = horizontal + 'px'
        console.log(horizontal)
    }
})
document.addEventListener('keydown',function(e){
    if(e.key === 'w'){
        console.log(e)
        vertical-=2
        hero.style.top = vertical+ 'px'
        console.log(vertical)
    }
})

document.addEventListener('keydown',function(e){
    if(e.key === 's'){
        console.log(e)
        vertical+=2
        hero.style.top = vertical+ 'px'
        console.log(vertical)
    }
})