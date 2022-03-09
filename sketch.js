var col = 0;

var backgroundPaleta,blueCol,redCol,blackCol,whiteCol;

function setup(){
    createCanvas(800,800)

    background(214);

    backgroundPaleta = createSprite(750,400,150,500)
    backgroundPaleta.shapeColor = 150;

    blackCol = createSprite(705,200,50,50)
    blackCol.shapeColor = 0;
    whiteCol = createSprite(770,200,50,50)
    whiteCol.shapeColor = 255;
    blueCol = createSprite(770,270,50,50)
    blueCol.shapeColor = "blue";
    redCol = createSprite(705,270,50,50)
    redCol.shapeColor = "red";
}

function draw(){


    if(mousePressedOver(blackCol)){
        col = 0;
    }
    if(mousePressedOver(whiteCol)){
        col = 255;
    }
    if(mousePressedOver(blueCol)){
        col = "blue";
    }
    if(mousePressedOver(redCol)){
        col = "red";
    }
    Paint();
    drawSprites();
}


function Paint(){
    if(mouseIsPressed === true){
        if(mouseButton === LEFT){
            fill(col)
            noStroke();
            rect(mouseX,mouseY,5,5)
        }
    }
}