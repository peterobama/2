let fuck;
let notreffa;
let mouseF;
var nextLevel;
let cursa;
let schein;
let beginn;


function preload(){
  fuck = loadImage('pegida.jpg');
 notreffa = loadImage('nope_31.png');
  mouseF = loadImage('curzaNEU.png');
 schein = loadImage('schein_2.png');
beginn = loadImage('beginn_2_2.png');
   
 }

  
function setup() {
    
    let canvas = createCanvas(3196, 631);                
    canvas.position(50,150);
    nextLevel = createImg('animation_6.gif');
   
    
noStroke();
noCursor();
  
 
}


function draw() {
    
  
  hintergrund();

if (mouseX<12 && mouseY>250 && mouseY<375){
    
   image(beginn,10,10);
  }
	

  if (((((mouseIsPressed)&&(mouseX>2250)&&(mouseX<2271)&&(mouseY>66)&&(mouseY<88))))){


     
   noLoop();
    image(schein,2245,52);
    nextLevel.position(2100,150);


       }
       
 
  if ((mouseIsPressed) && (mouseX<2250)){
    image(notreffa, mouseX-120, mouseY-190);
 	//	rect(0,0,3196,631);  
   	//fill(255,0,0,50);
  }
  if ((mouseIsPressed) && (mouseX>2271)){
    image(notreffa, mouseX-120, mouseY-190);
 	//	rect(0,0,3196,631);  
   	//fill(255,0,0,50);
  }
    if ((mouseIsPressed) && (mouseY<66)){
    image(notreffa, mouseX-120, mouseY-190);
 		//rect(0,0,3196,631);  
   	//fill(255,0,0,50);
  }
      if ((mouseIsPressed) && (mouseY>88)){
    image(notreffa, mouseX-120, mouseY-190);
 	//	rect(0,0,3196,631);  
   	//fill(255,0,0,50);
  }

       }

function hintergrund() {
 image(fuck,0,0);
	image(mouseF,mouseX-29,mouseY-40,80,80);
   


}
