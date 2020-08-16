class Kiosk2{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("kiosk2.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, -415,-530,220,50);
    }
}