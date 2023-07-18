const gameArea = document.querySelector('#game-area')
// console.log(gameArea)


class Character{
    constructor(health, damage, item=[]){
        this.health = health;
        this.damage = damage;
        this.item = item;
    }
}


class Hero extends Character{
    constructor(health,damage,item =[],width, height, x, y){
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