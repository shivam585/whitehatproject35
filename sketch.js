const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour,minutes

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(40);
    textFont("Algerian")
    strokeWeight(5)
    stroke("green")
    text("minutes :"+minutes,50,150)
    
    if(hour<=12){
        text("Time : "+ hour%12 + " PM", 50,100);
        textFont("Algerian")
        textSize(70);
        stroke("blue")
        text("good morning", 450,600);
        text("start your day with positive aitudes", 20,700);
      


    }else if(hour==12||hour>12&&hour<18){
       // text("Time : 12 AM",100,100);
       text("Time : "+ hour%12 + " PM", 50,100);
        textFont("Algerian")
        textSize(50);
        stroke("blue")
        //text("good morning", 450,600);
        text("sunset are proof that endings can be beautiful too", 20,700);

    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
        //text("Time : 12 AM",100,100);
        textFont("Algerian")
        textSize(70);
        stroke("green")
        //text("good morning", 450,600);
        text("night is a world lit by itself", 20,700);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
var responseJSON=await response.json();

var datetime=responseJSON.datetime;
 hour=datetime.slice(11,13)
 minutes=datetime.slice(14,16)
 console.log(minutes)
  
    if(hour>=0 && hour<12 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.jpg"
    }

    if(hour>18)
    {
        bg="nightscene.jpg"
    }

    
    backgroundImg = loadImage(bg);
}
