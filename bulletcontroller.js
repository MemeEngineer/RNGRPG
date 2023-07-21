import Bullet from "./bullet.js"
export default class BulletController{
    //puts the bullets in an array
    bullets = []
    //keeps a timer for each bullet 
    timerTillNextBullet = 0;
    constructor(gameArea){
        this.gameArea = gameArea;
    }
    shoot(x,y,speed,damage,delay){
        //spaces out bullet attack in an array
        // when timer is less than or = to 0 fires off bullet
        if(this.timerTillNextBullet <= 0){
            this.bullets.push(new Bullet(x,y,speed,damage))
            this.timerTillNextBullet = delay;
        }
        //timer decrement
        this.timerTillNextBullet--;
    }
    draw(ctx){
        //removes bullet in array if bullet goes past bullet height
        this.bullets.forEach((bullet) => {
        if(this.isBulletOffScreen(bullet)){
            const index = this.bullets.indexOf(bullet);
            this.bullets.splice(index,1)
        }
        //draws bullet onto the canvas / game-area
        bullet.draw(ctx)
    })
}

collideWith(mob){
    return this.bullets.some(bullet => {
        if( bullet.collideWith(mob)){
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
            return true
        }
        return false
    })
}

//returns true/false if bullet Y position is less than the bullet height (- is because of the grid origin)
isBulletOffScreen(bullet){
    return bullet.y <= -bullet.height
}
}