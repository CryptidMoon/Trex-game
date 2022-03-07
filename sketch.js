var ground
var groundimage
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(100,150,50,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.6

 ground=createSprite(300,190,600,20)
 ground.addImage(groundimage)
}

function draw(){
  background("white")
  if(keyDown("space")){
trex.velocityY=-6
ground.velocityX=-8
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
trex.velocityY+=0.5
  trex.collide(ground)
  drawSprites()

}

