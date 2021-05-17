var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;




function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(500,580,185,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,185,30);
    block4.shapeColor = "green";


  


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = 10;
    ball.velocityX = 10;

}



function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    
   
    
    
    
    ball.bounceOff(edges);

 
    
    //write code to bounce off ball from the block1 
    if((block1.isTouching(ball) && ball.bounceOff(block1))){
        ball.shapeColor = "blue"
    }
    


   
    if((block2.isTouching(ball) && ball.bounceOff(block2))){
        ball.shapeColor = "yellow";
        //write code to set velocityX and velocityY of ball as 0
        ball.setvelocityY = 0
        ball.setvelocityX = 0
    }

    //write code to bounce off ball from the block3
    if((block3.isTouching(ball) && ball.bounceOff(block3))){
        ball.shapeColor = "red";
    }
    //write code to bounce off ball from the block4
    if((block4.isTouching(ball) && ball.bounceOff(block4))){
        ball.shapeColor = "green";
    }
    drawSprites();

}
