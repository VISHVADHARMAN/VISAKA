class Fb{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("fb.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 750,970,40,40);
    }
}