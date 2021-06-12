var iss_img , spacebg1 , sc1 , sc2 ,sc3 ,sc4;
var iss , hasDocked , spacecraft ;

function preload(){
iss_img=loadImage("Docking-undocking/iss.png");
spacebg1=loadImage("Docking-undocking/spacebg.jpg");
sc1=loadImage("Docking-undocking/spacecraft1.png");
sc2=loadImage("Docking-undocking/spacecraft2.png");
sc3=loadImage("Docking-undocking/spacecraft3.png");
sc4=loadImage("Docking-undocking/spacecraft4.png");


}
function setup() {
  createCanvas(800,800);
 iss = createSprite(400, 200, 50, 50);
 iss.addImage("iss",iss_img);
iss.scale=1.15;
 spacecraft = createSprite(600,550,50,50);
 spacecraft.addImage("space",sc2);
 spacecraft.scale=0.5;
}

function draw() {
  background(spacebg1);  
  if (hasDocked===undefined) {
    
  
  if(keyDown(LEFT_ARROW)){
    spacecraft.x=spacecraft.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.x=spacecraft.x+5;
  }
  if (keyDown(UP_ARROW)) {
    spacecraft.y=spacecraft.y-5;
  }}
  if (spacecraft.x===320 && spacecraft.y===400) {
  hasDocked=true;
  }
  if(hasDocked===true){
    textSize(40);
    text("docking successfull",400,400);
  }
  console.log(spacecraft.x , spacecraft.y , hasDocked)
  drawSprites();
}