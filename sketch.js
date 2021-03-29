var car,boy,path,coin,coinG,fuelcan,fuelcanG;;
var carImg,boyImg,pathImg,coinImg,fuelcanImg;

function preload(){
  carImg = loadImage("blue_car3.png");
 // boyImg = loadAnimation("boy1.running.gif");
  pathImg = loadImage("Path.image.png");
  coinImg = loadImage("coins.image.png");
  fuelcanImg = loadImage("fuel.can2.png");

}

function setup() {
  createCanvas(1500,600);
 //createSprite(400, 200, 50, 50);

 path = createSprite(650,340);
 path.addImage(pathImg);
 path.velocityY = 10;

 

 //boy = createSprite(600,480,20,20);
 //boy.addAnimation(boyImg);
 //boy.velocityY = 4;

 car = createSprite(400,470,20,20);
 car.addImage(carImg);
 car.scale = 0.2;
 
 coinG = new Group()
 fuelcanG = new Group()


}

function draw() {
  background(255,255,255); 

  car.x = World.mouseX;
  
  edges= createEdgeSprites();
  car.collide(edges);

  if(path.y>600){
    path.y = height/2;
  }

  createCoin(); 
  createFuelcan();

  if(coinG.isTouching(car)){
    coinG.destroyEach();
  }

  if(fuelcanG.isTouching(car)){
    fuelcanG.destroyEach();
  }

  drawSprites();
}

function createCoin(){
  if(World.frameCount % 80 == 0){
    var coin = createSprite(Math.round(random(100,500),100,50,50))
    coin.addImage(coinImg);
    coinG.add(coin);
    coin.scale = 0.07;
    coin.velocityY=10;

  }
}

function createFuelcan(){
  if(World.frameCount % 300 == 0){
    var fuelcan = createSprite(Math.round(random(100,500),100,50,50))
    fuelcan.addImage(fuelcanImg);
    fuelcanG.add(fuelcan);
    fuelcan.scale = 0.1;
    fuelcan.velocityY=10;
  }
}

