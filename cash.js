class Cash{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("cash.jpg");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 390,700,300,300);
    }
}