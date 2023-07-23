

export default class Mob{
    
    constructor(x,y,color,health=['♥','♥','♥','♥']){
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health
        this.width = 50;
        this.height = 50;
    }
   
   
    
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.strokeRect(this.x,this.y,this.width,this.height)
        //draw text
        ctx.fillStyle = 'red';
        ctx.font = "15px arial";
        ctx.fillText(
            this.health,
            this.x + this.width / 100,
            this.y + this.height / 10
        )
    }

    takeDamage(){
        this.health.pop()
    }
    //collision mechanic with player/hero
    collideWithHero(knight){
        if(
            this.x < knight.x + knight.width &&
            this.x + this.width > knight.x && 
            this.y < knight.y + knight.height &&
            this.y + this.height > knight.y 
        ){
            knight.takeDamage();
            return true
        }
        return false
    }
    // HealthBar(){
       
    //     for (i= 0; i < 4; i++){
    //         this.health.push('♥')
    //     }
    // }
    // arrHealth = []
    // fillHealth(){
    //     health = arrHealth.fill('♥')* Math.floor(Math.random()* 5)
    //     console.log(arrHealth)
    // }

}
