
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boy_Img,ground,tree,tree_Img,stone,slingshot
var mango1,mango2,mango3,mango4,mango5

function preload()
{
	boy_Img = loadImage("img/boy.png")
  tree_Img = loadImage("img/tree.png")
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create()
	world = engine.world;

    boy = createSprite(200,430);
    boy.addImage("boyz",boy_Img);
    boy.scale = 0.09;

    tree = createSprite(600,300,400,20);
    tree.addImage("lala..",tree_Img);
    tree.scale = 0.3;

  	ground = new Ground(600,490,20,1200);

    mango1 = new Mango(550,350,50,50);

    stone = new Stone(60,380,50,50);
    slingshot = new Slingshot(stone.body,{x:150, y:380})

    console.log(stone);
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("grey");
  ground.display();
  stone.display();
  slingshot.display();
  mango1.display();
  detectCollision(stone,mango1);
  
  tree.depth = mango1.depth;
  tree.depth = mango1.depth + 1;

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}

function detectCollision(stone,mango){
  mangoBodyPosition=mango.body.Position
  stoneBodyPosition=stone.body.Position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);
  }
}

