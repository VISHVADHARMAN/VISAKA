class Printer{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("printer.jpg");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 760,700,300,300);
    }
}


