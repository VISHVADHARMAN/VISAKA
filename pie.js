class Pie{
    constructor(x,y,w,h){
        isStatic: true
        this.image = loadImage("PIE CHART.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 200,-30,600,350);
    }
}