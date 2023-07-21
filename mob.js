export default class Mob{
    constructor(x,y,color,health){
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.strokeRect(this.x,this.y,this.width,this.height)
        //draw text
        ctx.fillStyle = 'black';
        ctx.font = "25px arial";
        ctx.fillText(
            this.health,
            this.x + this.width / 3.5,
            this.y + this.height / 1.5
        )
    }

    takeDamage(damage){
        this.health -= damage
    }
}