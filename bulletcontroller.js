import Bullet from "./bullet.js"
export default class BulletController{
    bullets = []
    timerTillNextBullet = 0;
    constructor(gameArea){
        this.gameArea = gameArea;
    }
    shoot(x,y,speed,damage,delay){
        if(this.timerTillNextBullet <= 0){
            this.bullets.push(new Bullet(x,y,speed,damage))
            this.timerTillNextBullet = delay;
        }
        this.timerTillNextBullet--;
    }
    draw(ctx){
        
        this.bullets.forEach((bullet) => {
        if(this.isBulletOffScreen(bullet)){
            const index = this.bullets.indexOf(bullet);
            this.bullets.splice(index,1)
        }
        bullet.draw(ctx)
    })
}

isBulletOffScreen(bullet){
    return bullet.y <= -bullet.height
}
}