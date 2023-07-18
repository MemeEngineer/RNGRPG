const gameArea = document.querySelector('#game-area')
// console.log(gameArea)
const hero = document.querySelector('#hero')
console.log(hero)
class Character{
    constructor(health, damage, item=[]){
        this.health = health;
        this.damage = damage;
        this.item = item;
    }
}


class Hero extends Character{
    constructor(health,damage,item =[],width, height,color, x, y,type){
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

const Johnny = new Hero(100, 5, [],1,1,"red", 1,1)

function startGame(){
    start: function start(){
     const Johnny = new Hero(100, 5, [],1,1,"red", 1,1)
     console.log("start")
    }
}
let side = 0;

document.addEventListener('keydown', function(e){
if(e.key === 'a'){
   console.log(e)
   side-=2
   hero.style.left= side + "px"
   
}
})

document.addEventListener('keydown',function(e){
    if(e.key === 'd'){
        console.log(e)
        side+=2
        hero.style.left = side + 'px'
    }
})