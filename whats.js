class Whats{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("whats.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 850,970,40,40);
    }
}