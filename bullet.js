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
}