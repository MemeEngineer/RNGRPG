export default class Hero{
    constructor(x,y,health= ['💎'],damage,item =[]){
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.speed = 4;
        this.health = health;
        this.damage = damage;
        this.item = item;
    }

    draw(ctx){
        //makes border color
        ctx.strokeStyle = "Yellow";
        //makes border around shape
        ctx.strokeRect(this.x,this.y,this.width,this.height);
        //fills in shape color
        ctx.fillStyle = 'black';
        //makes shape a rectange with x, y location & width and height
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}