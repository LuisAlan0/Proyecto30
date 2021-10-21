const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var slingShot;
var polygon
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(710,200,250,10);

  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);

  //seegunda base 
  //nivel uno
  block17 = new Block(620,179,30,40);
  block18 = new Block(650,179,30,40);
  block19 = new Block(680,179,30,40);
  block20 = new Block(710,179,30,40);
  block21 = new Block(740,179,30,40);
  block22 = new Block(770,179,30,40);
  block23 = new Block(800,179,30,40);
  //nivel dos
  block24 = new Block(650,149,30,40);
  block25 = new Block(680,149,30,40);
  block26 = new Block(710,149,30,40);
  block27 = new Block(740,149,30,40);
  block28 = new Block(770,149,30,40);
  //nivel tres 
  block29 = new Block(680,129,30,40);
  block30 = new Block(710,129,30,40);
  block31 = new Block(740,129,30,40);
  //parte superior 
  block32 = new Block(710,100,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
 
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44);
  
  fill("white");
  textSize(20)
  text("arrastra el polígono y destruye los bloques", 310,40);
  textSize(15)
  text("para volver a usar el polígono",50,140);
  text("preciona la tecla ",50,160);
  fill("yellow")
  text("(ESPACIO)",164,160)

  //textSize(20);
  ground.display();
  stand1.display();
  stand2.display();


  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block29.display();
  block30.display();
  block31.display();
  fill("grey");
  block16.display();
  block32.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function keyPressed(){
  if (keyCode === 32){
    slingShot.attach(this.polygon);
  }
}

function mouseReleased(){
  slingShot.fly();
}
