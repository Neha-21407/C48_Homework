const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
  var bg, bgImg;
var topGround, bottomGround;
var playerImg, player, playerShoot, basketball, defenderImg, defender, defenderJump, basketballImg, ball, hoop;
var engine, world;
var score = 0;
var miss = 0;
var shot = 0;



function preload(){
bgImg = loadImage("assets/DIYGameBackgroundBball.jpeg");
playerImg = loadAnimation("assets/Basketball1.png");
playerShoot = loadAnimation("assets/Basketball2.png", "assets/Basketball3.png", "assets/Basketball4.png", "assets/Basketball5.png");
defenderImg = loadAnimation("assets/Defender2.png", "assets/Defender1.png");
basketballImg = loadAnimation("./assets/Basketball.png");
}

function setup(){

//background image
createCanvas(windowWidth, windowHeight);

engine = Engine.create();
world = engine.world;

bg = createSprite(displayWidth / 2 - 20,displayHeight / 2 - 40,1,1);
bg.addImage(bgImg);
bg.scale = 0.7;

player = createSprite(displayWidth/2 + 100, displayHeight/2 + 70);
player.addAnimation("play", playerImg);
player.addAnimation("shoot", playerShoot);
player.scale = 0.5;

hoop = createSprite(1150,400,50,50);
hoop.visible = false;

defender = createSprite(displayWidth/2 + 300, displayHeight/2 + 70);
defender.addAnimation("defender", defenderImg);
defender.scale = 0.5;


//player.changeAnimation("play");


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;

basketball = new Basketball(850, 400);
}



function draw() {
  
  background("black");
        drawSprites();

  Engine.update(engine);

  basketball.display();

  textSize(23);
  text("Made: " + score, 150,170);
  textSize(23);
  text("Shots: " + shot, 150,140);
  textSize(22);
  text("Misses: " + miss, 150,200);


  if(collide(basketball, hoop) == true) {
    score++;
  }

  if(collide(basketball, defender) == true) {
    miss  ++;
  }
}


function keyReleased() {
  if (keyCode === UP_ARROW) {
    basketball.shoot();
    player.changeAnimation("shoot"); 
    shot++;
    if(basketball.positionX > 850){
      player.changeAnimation("play");
    }
  }


}

function collide(body,sprite) { 
  if(body!=null) 
  { 
    var d = dist(body.positionX,body.positionY,sprite.position.x,sprite.position.y); 
    if(d<=80) { 
      basketball.positionX = 850;
      basketball.positionY = 400;
      
    } else{ 
        return false; 
      } 
  } 
}

