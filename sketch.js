const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var kiosk, kiosk_Img;
function preload(){
    
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight+800);
    engine = Engine.create();
    world = engine.world;
    kiosk = new Kiosk(200,200,20,20);
    kiosk2 = new Kiosk2(300,300,200,200);
    kiosk3 = new Kiosk3();
    cash = new Cash();
    printer = new Printer();
    whats = new Whats();
    insta = new Insta();
    fb = new Fb();
    whats = new Whats();
    pie = new Pie(300,300,200,200);
    camera.position.x = 200;
    camera.position.y = 250
}

function draw(){
    background(196);
    Engine.update(engine);
    kiosk.display();
    kiosk2.display();
    kiosk3.display();
    printer.display();
    pie.display();
    cash.display();
    whats.display();
    insta.display();
    fb.display();

   

    text("Tel : +(91) 4577229070", 600,-540,textSize(15),fill("brown"));
    text("Email : visaka@gmail.com", 600,-520,textSize(15),fill("brown"));
    text("ABOUT US ", -400,-420,textSize(20));
    text("VISAKA Pte Ltd is an excellent IT service provider in India, Sri Lanka, Nepal, Bhutan, Tibet and Maldives. Our company started on year 2000 and running  ", -400,-380,textSize(18),fill("blue"));
    text("successfully for the last 20 years.", -400,-340);
    text("VISAKA mainly deals with selling Touch screen based Point of Sales Machines, Barcode Scanners, Computer Accessories, Printers, CashDrawers and quality", -400, -290 , fill("green"));
    text("software for all the hardware. We are running our own IT development and support team for the full satisfaction towards our valuable customers.",-400,-265);
    text("Right now VISAKA has lot of clients around Asia viz Sunoyo, EpicBoa, Unicorn, Super Nova, MFC, Interio and counting goes on.",-400, -220,fill("blue"));
    

    text("Our Specialized Products", -400,200,fill("brown"));
    text("1. Self-Kiosk Terminal", -400,220, textSize(15), fill("blue"));
    text("2. E-MENU Tablet", -400, 260);
    text("3. Cash Register SG-800 ECR", -400, 290);
    text("4. Drawer (L), Drawer (S) and Cover",-400,320);
    text("5. HW - 1 Scanner",-400,350);
    text("6. All Kinds Of Printers",-400,380);

    text("Contact Us", 160,180,textSize(18),fill("brown"));
    text("Software Enquiries.", 160, 215,textSize(15),fill("blue"));
    text("+(91) 8135448723",292,227,fill("brown"));
    text("Product Enquiries.",160,255,fill("blue"));
    text("+(91) 4577229070",285,255,fill("brown"));
    text("MISSION",-400,-175,textSize(20),fill("brown"));
    text("'Expect The Best' is our Mission.",-400,-120,fill("green"));
    text("We achieved most clients than",-400,-92);
    text("any other IT service providing",-400,-64);
    text("companies in Asia becuase of our",-400,-36);
    text("strict following of our mission.",-400,-8);
    text("VISION",500,-167,fill("brown"));
    //text("Accuracy and Satisfaction is our Vision",500,-135);
    text("We maintain 24/7 service, timely delivery,",500,-135,fill("green"));
    text("quality accurancy and assurance. Last but ",500,-105);
    text("not least 100% customer satisfaction is",500,-75);
    text("always our vision.",500,-45);
    text("All Rights Reserved @ VISAKA Pte Ltd",0,980,fill("black"));
    text("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",-1000,500,fill("blue"));
    text("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",-1000,900,fill("blue"));
  
}