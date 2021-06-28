var bulb1;
var wire1, wire2;

function preload(){
  b1= loadImage("images/bulb1.png")
  b2 = loadImage("images/bulb2.png")
}
function setup() {
  createCanvas(800,600);
 bulb1 = createSprite(250, 200, 50, 50);
 bulb1.addImage("b1", b1)
 bulb1.addImage("b2", b2)


 bulb2 = createSprite(550, 200, 50, 50);
 bulb2.addImage("b1", b1)
 bulb2.addImage("b2", b2)

// stick = createSprite(100, 100, 100, 20)
// stick.shapeColor="brown"

wire1 = createSprite(400,550,10,100)
wire1.shapeColor="red"

}

function draw() {
  background("cyan");  
  // stick.x=mouseX
  // stick.y = mouseY

  if(wire1.y < 600 && wire1.y>380){
  if(keyDown("up")){
    wire1.y-=2
  }
  if(keyDown("down")){
    wire1.y+=2
  }
  if(keyDown("right")){
    wire1.x+=2
  }
  if(keyDown("left")){
    wire1.x-=2
  }
}

  textSize(20)
  fill("red")
  text("Test the Bulb!", 350,30)
    
  
      if(wire1.y - bulb1.y < (wire1.height + bulb1.height)/2
      && bulb1.y - wire1.y < (wire1.height + bulb1.height)/2){
      bulb1.changeImage("b2", b2)
      
    }

    else{
      bulb1.changeImage("b1", b1)
    }

    
    if(wire1.y - bulb2.y < (wire1.height + bulb2.height)/2
    &&bulb2.y - wire1.y < (wire1.height + bulb2.height)/2){
      bulb2.changeImage("b2", b2)
     
  }

  else{
    bulb2.changeImage("b1", b1)
  }

  


  drawSprites();
}


