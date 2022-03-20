var cat, catImg
var background, backgroundImg
var obstacles, obstaclesGroup, obstacleImg
var gameState = "play"

function preload(){
  catImg = loadAnimation("cat2.png", "cat3.png", "cat4.png");
  backgroundImg = loadImage("background2.png");
  obstacleImg = loadImage("obstacle1.png");
}

function setup() {
  createCanvas(600, 600);
  
  
  obstaclesGroup = new Group();
  
  background = createSprite(windowWidth,windowHeight);
  background.addImage("background", backgroundImg);
  background.velocityX = -15;

  cat = createSprite(300,300);
  cat.addImage("cat",catImg);
  cat.scale = 1.5;
}

function draw() {
  if(gameState === "play"){
    
  if(background.x > 400){
      background.x = 1000
    }
  cat.x = World.mouseX;
  

  if(obstaclesGroup.isTouching(cat)){
    cat.destroy();
    gameState = "end";
  }

  spawnObstacles();
  drawSprites()
  }
  if(gameState === "end"){
    fill("red");
    textSize(45);
    textFont("Cursive"); 
    text("The cat died", 180, 300);
  }
}
function spawnObstacles(){
  if(frameCount%200 === 0){
    obstacles = createSprite(Math.round(random(120, 460)), -50);
    obstacles.addImage(doorImg);
    obstacles.velocityX = -15;
    obstacles.lifetime = 800;
    obstaclesGroup.add(obstacles);

    cat.depth = background.depth;
    cat.depth += 1;
  }

}