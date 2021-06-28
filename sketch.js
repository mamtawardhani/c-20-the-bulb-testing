var bulb1;

function preload(){
  b1= loadImage("images/bulb1.png")
  b2 = loadImage("images/bulb2.png")
}
function setup() {
  createCanvas(800,400);
 bulb1 = createSprite(250, 200, 50, 50);
 bulb1.addImage("b1", b1)
 bulb1.addImage("b2", b2)


 bulb2 = createSprite(550, 200, 50, 50);
 bulb2.addImage("b1", b1)
 bulb2.addImage("b2", b2)

 stick = createSprite(100, 100, 100, 20)
stick.shapeColor="brown"
}

function draw() {
  background(0);  
  stick.x=mouseX
  stick.y = mouseY

    if(stick.x - bulb1.x < (stick.width + bulb1.width)/2
      &&bulb1.x - stick.x < (stick.width + bulb1.width)/2
      &&stick.y - bulb1.y < (stick.height + bulb1.height)/2
      &&bulb1.y - stick.y < (stick.height + bulb1.height)/2){
        bulb1.changeImage("b2", b2)
    }

    else{
      bulb1.changeImage("b1", b1)
    }

    if(stick.x - bulb2.x < (stick.width + bulb2.width)/2
    &&bulb2.x - stick.x < (stick.width + bulb2.width)/2
    &&stick.y - bulb2.y < (stick.height + bulb2.height)/2
    &&bulb2.y - stick.y < (stick.height + bulb2.height)/2){
      bulb2.changeImage("b2", b2)
  }

  else{
    bulb2.changeImage("b1", b1)
  }



  drawSprites();
}