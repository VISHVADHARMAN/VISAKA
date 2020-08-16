class Kiosk3{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("kiosk 3.jpg");
    }
    display(){
        imageMode(CENTER);
        image(this.image,0,700,300,300);
    }
}