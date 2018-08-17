var img  = {
  character: [], 
  food : []
}
var character = {
  hunger : 2,
  health : 5
}
var poops = [];
var foodTime = 0
//function preload(){
  //img.character[0] = loadImage("images/pand-1.png")
  //img.character[1] = loadImage("images/pand-2.png")
  //img.food [1] = loadImage("images/food-3.png")
  //img.food [2] = loadImage("images/food-2.png")
  //img.food [3] = loadImage("images/food-1.png")
//}

function setup (){
  createCanvas(400,500)
  frameRate(1)
}
function draw() {
drawbg()
//drawCharacter()
//drawFood()
drawStatus()
}
//draw functions

function drawFood () {
if (foodTime > 0){
  image(img.food[foodTime], (width-100)/2,height-104)
  foodTime -=1
}

}
function drawStatus () {
  fill("white")
  rect((width-200)/2, 25,200,25)
  fill ("tomato")
  rect((width-200)/2,25, character.hunger*20, 25)
   fill("white")
   rect((width-200)/2,75,200,25)
   fill("#F7FF01")
   rect((width-200)/2,75,character.health*20,25)
   
}
function drawbg (){
  fill("#EEE8AA")
  noStroke()
  rect(0,0,width,height)
  fill("#BDB76B")
  rect(0,height-50, width,50)

}

function drawCharacter () {
  if(frameCount % 2 === 0){
//draw squashed
image(img.character[0],(width-250)/2,height-263)
}else{
  //draw streched
  image(img.character[1],(width-250)/2,height-263)
}
}
//click functions
function feed (){
  if (foodTime === 0){
     foodTime = 3
  }
  
 
}
function clean () {
  poops = []
}
//timer functions

function generatepoop () {
var newPoop = {x:Math.floor( Math.random()* width),
y:Math.floor(Math.random()* height)
}
poops.push(newPoop)
}
setInterval(generatepoop, 60000)
