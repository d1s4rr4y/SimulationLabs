var x = 200;
var y = 200;

function addRandomDirection(){
    let randomChoice = floor(random(4));

    switch(randomChoice){
        case 0:
            x++;
            break;
        case 1:
            x--;
            break;
        case 2:
            y++;
            break;
        default:
            y--;
    }
}

function setup(){
    createCanvas(400, 400);
    background(140, 205, 230);
}

function draw(){
    stroke(245, 175, 0); // pen colour 
    addRandomDirection(); // change state
    point(x,y); // draw state
}