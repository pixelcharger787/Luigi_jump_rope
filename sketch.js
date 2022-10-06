var luigi
var ground
var goomba
function preload(){
luigiImg = loadImage("Luigi.png");
goombaImg = loadImage("goomba.png");
}

function setup() {
createCanvas(600,600);
luigi = createSprite(120,350);
luigi.addImage("Luigi.png",luigiImg);
luigi.scale = 0.25
goomba = createSprite(500,480);
goomba.addImage("goomba.png",goombaImg);
goomba.scale = 0.1
Ground = createSprite(200,555,1000,100);
//Ground.visible = false;
}

function draw() {
 background(69420);

 if(keyDown("space")){
    luigi.velocityY = -20;
  }
luigi.velocityY = luigi.velocityY+0.8
luigi.collide(Ground);

goomba.velocityX = -3
if(goomba.x<=20){
goomba.velocityX = 420
}
if(goomba.x>=600){
    goomba.velocityX = -99999999999
    }
    
if(goomba.isTouching(luigi)){
    luigi.y=-420
}    

console.log(luigi.y);
 drawSprites();
}

