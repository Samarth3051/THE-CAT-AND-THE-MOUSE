var BackGround;
var cat,cat1, cat2, cat3;
var mouse,mouse1, mouse2,mouse3;

function preload() {
    //load the images here
    BackGround = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,600,20,20);
    cat.addAnimation("cat",cat1);
    cat.scale = 0.2;

    
    mouse = createSprite(200,630,15,15);
    mouse.addAnimation("mouse",mouse1);
    mouse.scale = 0.12;
    

}

function draw() {

    background(BackGround);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){

        cat.velocityX= 0;
        cat.addAnimation("cat2",cat3);
        cat.changeAnimation("cat2");

        
        mouse.addAnimation("mouse2",mouse3);
        mouse.changeAnimation("mouse2")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.addAnimation("cat3",cat2);
      cat.changeAnimation("cat3");
      cat.velocityX = -4;

      mouse.addAnimation("mouseteasing",mouse2);
      mouse.changeAnimation("mouseteasing");
      mouse.frameDelay = 25;
  }


}
