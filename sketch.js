 var jaxson, jaxsonRunning;
 var path;
 var pathImg;
 var invisbleBarrior;
 var invisbleBarrior2;
 var invisblePath;

function preload(){
  
 jaxsonRunning = loadAnimation ("runner-1.png","runner-2.png");
 pathImg = loadImage ("path.png");

}

  function setup(){

   createCanvas(500,1000);
   
  path = createSprite (200,200);
  path.addImage (pathImg);

  path.velocityY = 4;
  path.scale = 1.2;
  
  invisblePath = createSprite (100,300,30,400);
  invisblePath.visible = false;

  jaxson = createSprite (200,400,50,30);
  jaxson.addAnimation ("Running",  jaxsonRunning);
  jaxson.scale = 0.1

  invisbleBarrior = createSprite (50,200,10,3000);
  invisbleBarrior.visible = false;

  invisbleBarrior2 = createSprite (360,200,10,30000);
  invisbleBarrior2.visible = false;
 
}

function draw() {
  background(0);

  if (path.y > 400) {
    path.y = path.height/10;

  }
  
  if (keyDown (RIGHT_ARROW)) {
  jaxson.velocityX = 3

  }

  if (keyDown (LEFT_ARROW)) {
  jaxson.velocityX = -3

  }
  
  jaxson.collide (invisbleBarrior);
  jaxson.collide (invisbleBarrior2);

   drawSprites ();

}
