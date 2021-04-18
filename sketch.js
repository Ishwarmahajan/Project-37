//Create variables here
var database, foodS, foodStock, dog, dog_image, happydog, happydog_image

function preload()
{
	//load images here
  dog_image = loadImage("images/dogImg.png")
  happydog_image = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database()

  dog = createSprite(250, 250, 50, 50)
  dog.addImage("dog", dog_image)
  dog.scale = 0.3

  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  
}


function draw() {  
  background(46, 139, 87)

  drawSprites();
  //add styles here

}



