class Insta{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("insta.jpg");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 800,970,40,40);
    }
}