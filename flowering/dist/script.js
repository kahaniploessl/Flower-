//Code by Kahani Ploessl

let c = 0;
let x = 0;
let y;

// let xO;
let yO = 0;
  
let size = 600;
  
let r=255;
let Rp;
let g=255;
let Gp;
let b=255;
let Bp;

let p;
let a = 1;

let speedx = size/5;
let speedy = 0;

let accelerationy = 1;
  
let first = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw (){
  y=height-speedy;
  x+=speedx;
  
  console.log(width,x,y);
  
  if (x>width){
    x=0;
    speedy+=accelerationy*a;
    
    c++;
    if (c%700==0){
       a=-a;
    }
    
    r-=50;
    g-=10;
    b-=50;
    if (g<-40) {
      r=195;
      g=235;
      b=195;
    }
    
 
    Rp=r;
    Gp=g;
    Bp=b;

    p=random(200);
    if (p>185) {
      r=134;
      g=6;
      b=99; 
    } else {
      r=Rp;
      g=Gp;
      b=Bp;
    }
  }
  

  stroke(r,g,b);
  noFill();
  ellipse(x+350,y,x+1.5*size,x+1*size);
}