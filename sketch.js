
var monkey , monkey_running
var banana, bananaImage, obstacle, obstacleImage;
var foodsGroup, obstaclesGroup;
var score=0;
var survivalTime=0; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
}



function setup() {
createCanvas(600,600);
  
  monkey=createSprite(100,535,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(0,550,600,10);
  ground.velocityX=-4;
  //ground.x=ground.width/2;
  //console.log(ground.x);
  
  foodsGroup = new Group();
  obstaclesgroup = new Group();
}


function draw() {
background(220);
   ground.velocityX=-4;
  
  if(ground.x<0){
    
    ground.x=ground.width/2;
    
  }
  
  if(keyDown("space")&& monkey.y >= 400) {
        monkey.velocityY = -12;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnFoods();
  spawnobstacle();
  
  if(monkey.isTouching(foodsGroup)){
     score=score+1;
     foodsGroup.destroyEach();
     }
  if(monkey.isTouching(obstaclesgroup)){
     score=score-1;
    obstaclesgroup.destroyEach();
     }
  
  monkey.collide(ground);
  drawSprites();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,430,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,50);
}

function spawnFoods(){
  if(frameCount % 80 === 0){
  var food = createSprite(600,200);
  
  
  food.y = Math.round(random(310,500));
    
  food.addImage(bananaImage);
  food.velocityX=-4;
  food.scale=0.1;
  foodsGroup.add(food);
  food.lifetime=250;
   
    
}
}
function spawnobstacle(){
  

    if(frameCount % 150 === 0){
      var obstacle = createSprite(550,525);
    obstacle.addImage(obstaclesImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.1;
      obstaclesgroup.add(obstacle);
      obstacle.lifetime=250;
  
    }
     }
  


