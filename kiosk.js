class Kiosk{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("kiosk machine.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, -380,700,300,300);
    }
}