var movingRect, fixedRect


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(500,200,20,20);
  fixedRect1=createSprite(600,200,20,20);
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(isTouching(movingRect,fixedRect) ){
     movingRect.shapeColor="blue";
     fixedRect.shapeColor="green";
     
   }
   else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="red";
    fixedRect1.shapeColor="red";
   }
   else
   {
     movingRect.shapeColor="black";
   fixedRect.shapeColor="black";
   fixedRect1.shapeColor="black";
}
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x <=object1.width/2+object2.width/2 &&
    object2.x-object1.x <=object1.width/2+object2.width/2&&
    object1.y-object2.y <=object1.height/2+object2.height/2&&
   object2.y-object1.y <=object1.height/2+object2.height/2 ){
     return true;
   }
     else{
       return false;
     }
   
}