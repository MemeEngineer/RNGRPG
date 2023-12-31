export default class Bullet{
    constructor(x,y,speed, damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.width = 5;
        this.height = 15;
        this.color = "red";
    }

    draw(ctx){
        //makes color of the bullet
        ctx.fillStyle = this.color;
        // placement of the bullet
        this.y -= this.speed;
        //dimensional properties of the bullet
        ctx.fillRect(this.x,this.y, this.width, this.height)
    }
//collision mechanic with bullet based on position on canvas
    collideWith(mob){
        if(
            this.x < mob.x + mob.width &&
            this.x + this.width > mob.x && 
            this.y < mob.y + mob.height &&
            this.y + this.height > mob.y 
        ){
            mob.takeDamage(this.damage);
            return true
        }
        return false
    }
}