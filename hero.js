export default class Hero{
    constructor(x,y, BulletController,health= ['❤'],damage,item =[]){
        this.x = x;
        this.y = y;
        this.BulletController = BulletController
        this.width = 25;
        this.height = 25;
        this.speed = 4;
        this.health = health;
        this.damage = damage;
        this.item = item;
        //event listener when pressing W,S,A,D (up, down, left, right)
        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup",this.keyup);
    }

    draw(ctx){
        //calling the movement method
        this.move()
        //makes border color
        ctx.strokeStyle = "Yellow";
        //makes border around shape
        ctx.strokeRect(this.x,this.y,this.width,this.height);
        //fills in shape color
        ctx.fillStyle = 'black';
        //makes shape a rectange with x, y location & width and height
        ctx.fillRect(this.x,this.y,this.width,this.height);
        //calling on the attack method
        this.attack();
    }

    attack(){
        if(this.attackPressed){
            const speed = 5;
            const delay = 7;
            this.damage = 1;
            const bulletX = this.x + this.width /2;
            const bulletY = this.y;
            this.BulletController.shoot(bulletX, bulletY, speed, this.damage, delay)
        }
    }

    move(){
        if(this.upPressed){
            this.y -= this.speed;
        }
        if(this.downPressed){
            this.y += this.speed;
        }
        if(this.leftPressed){
            this.x -= this.speed;
        }
        if(this.rightPressed){
            this.x += this.speed;
        }
    }

    keydown = (e) => {
        if(e.key === "w"){
        this.upPressed = true
        }
        if(e.key === "s"){
        this.downPressed = true
        }
        if(e.key === "a"){
        this.leftPressed = true
        }
        if(e.key === "d"){
        this.rightPressed = true
        }
        if(e.key === "h"){
            this.attackPressed = true;
        }
    }
    
    keyup = (e) => {
        if(e.key === "w"){
        this.upPressed = false
        }
        if(e.key === "s"){
        this.downPressed = false
        }
        if(e.key === "a"){
        this.leftPressed = false
        }
        if(e.key === "d"){
        this.rightPressed = false
        }
        if(e.key === "h"){
            this.attackPressed = false;
        }
    }
}

