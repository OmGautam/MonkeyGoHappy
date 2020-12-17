
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var bananaGroup, obstacleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(900,400);
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  score = 0;
  
  bananaGroup = new Group;
  obstacleGroup = new Group;
  
}


function draw() {
  background("white");
  text("Score: "+ score, 500,50);
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  score = score + Math.round(getFrameRate()/60);
  
  food();
  spawnObstacles();
  
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(450,300,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -2;
    banana.setLifetimeEach = 450;
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(900,330,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.setLifetimeEach = 150;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
  }
}




