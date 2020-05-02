
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
var boxes2 = [];
 
function setup() {
    createCanvas(800, 600);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(625, 550);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 ground = new Ground(400,590,800,30)
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        boxes2.push(new Particle(mouseX,mouseY,random (10,50)));
        boxes.push(new Box(mouseX,mouseY,random(20,80),random(20,80)));
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background("pink");
    Engine.update(engine);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
for(var i = 0;i<boxes.length;i++){
    boxes[i].display();
    boxes2[i].display();

}
ground.display();
fill(0);
textSize(15);
text("gravity"+fVal,660,593)
}
 

